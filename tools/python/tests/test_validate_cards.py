import importlib.util
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "scripts" / "validate_cards.py"
SPEC = importlib.util.spec_from_file_location("validate_cards", MODULE_PATH)
validate_cards_module = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(validate_cards_module)


def test_validate_cards_accepts_well_formed_cards() -> None:
    cards = [
        {
            "id": "the-fool",
            "name": {"en": "The Fool", "zh": "愚者"},
            "arcana": "major",
            "suit": None,
            "number": 0,
            "description": {"en": "A card", "zh": "一张牌"},
            "coreKeyword": {"en": "Freedom", "zh": "自由"},
            "meaning": {
                "upright": {"en": "Upright", "zh": "正位"},
                "reversed": {"en": "Reversed", "zh": "逆位"},
            },
            "readingAspects": {
                "currentSituation": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "innerState": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "rootCause": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "development": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "advice": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
            },
            "contextualMeanings": {
                "love": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "work": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "interpersonal": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "others": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
            },
            "image": {"url": "/images/rider-waite/the-fool.jpg"},
        }
    ]

    validate_cards_module.validate_cards(cards, expected_count=1)


def test_validate_cards_rejects_missing_required_fields() -> None:
    cards = [
        {
            "id": "the-fool",
            "name": {"en": "The Fool", "zh": "愚者"},
            "arcana": "major",
            "suit": None,
            "number": 0,
            "description": {"en": "A card", "zh": "一张牌"},
            "coreKeyword": {"en": "Freedom", "zh": "自由"},
            "meaning": {"upright": {"en": "Upright", "zh": "正位"}},
            "readingAspects": {},
            "contextualMeanings": {},
            "image": {"url": "/images/rider-waite/the-fool.jpg"},
        }
    ]

    try:
        validate_cards_module.validate_cards(cards, expected_count=1)
    except ValueError as exc:
        assert "meaning" in str(exc)
    else:
        raise AssertionError("Expected validate_cards to reject incomplete card data")


def test_validate_cards_rejects_invalid_minor_suit() -> None:
    cards = [
        {
            "id": "ace-of-cups",
            "name": {"en": "Ace of Cups", "zh": "圣杯王牌"},
            "arcana": "minor",
            "suit": "stars",
            "number": 1,
            "description": {"en": "A card", "zh": "一张牌"},
            "coreKeyword": {"en": "Emotion", "zh": "情感"},
            "meaning": {
                "upright": {"en": "Upright", "zh": "正位"},
                "reversed": {"en": "Reversed", "zh": "逆位"},
            },
            "readingAspects": {
                "currentSituation": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "innerState": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "rootCause": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "development": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "advice": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
            },
            "contextualMeanings": {
                "love": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "work": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "interpersonal": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
                "others": {"upright": {"en": "x", "zh": "x"}, "reversed": {"en": "x", "zh": "x"}},
            },
            "image": {"url": "/images/rider-waite/ace-of-cups.jpg"},
        }
    ]

    try:
        validate_cards_module.validate_cards(cards, expected_count=1)
    except ValueError as exc:
        assert "invalid suit" in str(exc)
    else:
        raise AssertionError("Expected validate_cards to reject invalid minor suit")
