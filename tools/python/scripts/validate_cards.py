import json
from pathlib import Path
from typing import Any


REQUIRED_FIELDS = {
    "id": str,
    "name": dict,
    "arcana": str,
    "suit": (type(None), str),
    "number": int,
    "description": dict,
    "coreKeyword": dict,
    "meaning": dict,
    "readingAspects": dict,
    "contextualMeanings": dict,
    "image": dict,
}

ALLOWED_ARCANA = {"major", "minor"}
ALLOWED_SUITS = {"wands", "cups", "swords", "pentacles"}
REQUIRED_LOCALIZED_FIELDS = {"en", "zh"}
REQUIRED_MEANING_FIELDS = {"upright", "reversed"}
REQUIRED_READING_ASPECTS_FIELDS = {
    "currentSituation",
    "innerState",
    "rootCause",
    "development",
    "advice",
}
REQUIRED_CONTEXTUAL_FIELDS = {"love", "work", "interpersonal", "others"}


def _ensure_localized_text(value: Any, card_id: str, field_name: str) -> None:
    if not isinstance(value, dict):
        raise ValueError(f"Card '{card_id}' has invalid '{field_name}' field.")

    missing_languages = REQUIRED_LOCALIZED_FIELDS.difference(value.keys())
    if missing_languages:
        raise ValueError(
            f"Card '{card_id}' is missing localized '{field_name}' entries for: {sorted(missing_languages)}"
        )

    for language in REQUIRED_LOCALIZED_FIELDS:
        if not isinstance(value[language], str) or not value[language].strip():
            raise ValueError(f"Card '{card_id}' has invalid '{field_name}.{language}'.")


def _ensure_meaning_block(value: Any, card_id: str, field_name: str) -> None:
    if not isinstance(value, dict):
        raise ValueError(f"Card '{card_id}' has invalid '{field_name}' field.")

    missing_entries = REQUIRED_MEANING_FIELDS.difference(value.keys())
    if missing_entries:
        raise ValueError(f"Card '{card_id}' is missing '{field_name}' entries for: {sorted(missing_entries)}")

    for entry in REQUIRED_MEANING_FIELDS:
        _ensure_localized_text(value[entry], card_id, f"{field_name}.{entry}")


def validate_cards(cards: list[dict], expected_count: int | None = None) -> None:
    if not isinstance(cards, list):
        raise ValueError("The card data must be a list.")

    expected_count = 78 if expected_count is None else expected_count
    if len(cards) != expected_count:
        raise ValueError(f"Expected {expected_count} cards, found {len(cards)}.")

    seen_ids = set()

    for index, card in enumerate(cards):
        if not isinstance(card, dict):
            raise ValueError(f"Card at index {index} is not an object.")

        card_id = card.get("id")
        if not isinstance(card_id, str) or not card_id.strip():
            raise ValueError(f"Card at index {index} is missing a valid 'id'.")

        if card_id in seen_ids:
            raise ValueError(f"Duplicate card id found: {card_id}")
        seen_ids.add(card_id)

        for field_name, expected_type in REQUIRED_FIELDS.items():
            if field_name not in card:
                raise ValueError(f"Card '{card_id}' is missing '{field_name}'.")

            value = card[field_name]
            if expected_type is str:
                if not isinstance(value, str) or not value.strip():
                    raise ValueError(f"Card '{card_id}' has invalid '{field_name}'.")
            elif expected_type is dict:
                if not isinstance(value, dict):
                    raise ValueError(f"Card '{card_id}' has invalid '{field_name}'.")
            elif expected_type is int:
                if not isinstance(value, int):
                    raise ValueError(f"Card '{card_id}' has invalid '{field_name}'.")
            else:
                if not isinstance(value, expected_type):
                    raise ValueError(f"Card '{card_id}' has invalid '{field_name}'.")

        _ensure_localized_text(card["name"], card_id, "name")
        _ensure_localized_text(card["description"], card_id, "description")
        _ensure_localized_text(card["coreKeyword"], card_id, "coreKeyword")
        _ensure_meaning_block(card["meaning"], card_id, "meaning")

        if card["arcana"] not in ALLOWED_ARCANA:
            raise ValueError(f"Card '{card_id}' has invalid arcana '{card['arcana']}'.")

        if card["arcana"] == "major":
            if card["suit"] is not None:
                raise ValueError(f"Major arcana card '{card_id}' must not have a suit.")
            if not 0 <= card["number"] <= 21:
                raise ValueError(f"Major arcana card '{card_id}' has invalid number {card['number']}.")
        else:
            if not isinstance(card["suit"], str) or card["suit"] not in ALLOWED_SUITS:
                raise ValueError(f"Minor arcana card '{card_id}' has invalid suit '{card['suit']}'.")
            if not 1 <= card["number"] <= 14:
                raise ValueError(f"Minor arcana card '{card_id}' has invalid number {card['number']}.")

        reading_aspects = card["readingAspects"]
        for aspect_name in REQUIRED_READING_ASPECTS_FIELDS:
            if aspect_name not in reading_aspects:
                raise ValueError(f"Card '{card_id}' is missing reading aspect '{aspect_name}'.")
            _ensure_meaning_block(reading_aspects[aspect_name], card_id, f"readingAspects.{aspect_name}")

        contextual_meanings = card["contextualMeanings"]
        for context_name in REQUIRED_CONTEXTUAL_FIELDS:
            if context_name not in contextual_meanings:
                raise ValueError(f"Card '{card_id}' is missing contextual meaning '{context_name}'.")
            _ensure_meaning_block(contextual_meanings[context_name], card_id, f"contextualMeanings.{context_name}")

        image = card["image"]
        if not isinstance(image, dict) or "url" not in image or not isinstance(image["url"], str) or not image["url"].strip():
            raise ValueError(f"Card '{card_id}' has invalid image URL.")

    print(f"Validation passed for {len(cards)} cards.")


def main() -> None:
    root = Path(__file__).resolve().parent.parent
    data_path = root / "cards.generated.json"

    with data_path.open("r", encoding="utf-8") as file:
        cards = json.load(file)

    validate_cards(cards)


if __name__ == "__main__":
    main()