import json
from pathlib import Path


def validate_cards(cards: list[dict]) -> None:
    seen_ids = set()

    for index, card in enumerate(cards):
        card_id = card.get("id")
        if not card_id:
            raise ValueError(f"Card at index {index} is missing 'id'.")

        if card_id in seen_ids:
            raise ValueError(f"Duplicate card id found: {card_id}")
        seen_ids.add(card_id)

        if "name" not in card:
            raise ValueError(f"Card '{card_id}' is missing 'name'.")

        if "meaning" not in card:
            raise ValueError(f"Card '{card_id}' is missing 'meaning'.")

    print(f"Validation passed for {len(cards)} cards.")


def main() -> None:
    root = Path(__file__).resolve().parent.parent
    data_path = root / "cards.generated.json"

    with data_path.open("r", encoding="utf-8") as file:
        cards = json.load(file)

    validate_cards(cards)


if __name__ == "__main__":
    main()