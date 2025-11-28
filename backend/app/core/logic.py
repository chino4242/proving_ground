# backend/app/core/logic.py
from app.db.benchmarks import get_standards

def calculate_rank(test_id: str, value: float, age: int, sex: str) -> dict:
    # 1. Get the correct Rulebook (Men vs Women)
    standards = get_standards(sex)
    
    # 2. Check if the test exists
    if test_id not in standards:
        return {
            "rank_name": "Unknown Test",
            "rank_level": "0",
            "description": "Test ID not found in database."
        }

    test_data = standards[test_id]
    meta = test_data['meta']
    scoring_direction = meta['scoring']
    
    # 3. Handle Bodyweight Logic (Future Proofing)
    # Your logic handled xBW, but currently the frontend only sends raw value.
    # We will treat 'value' as the final comparison value for now.
    comparison_value = value

    # 4. Find the correct Age Bracket
    age_bracket = None
    for bracket in test_data["logic"]:
        if bracket["minAge"] <= age <= bracket["maxAge"]:
            age_bracket = bracket
            break
            
    if not age_bracket:
        return {
            "rank_name": "Unranked",
            "rank_level": "0",
            "description": "Age out of range for standards."
        }

    # 5. The Comparison Logic
    thresholds = age_bracket["thresholds"]
    
    # Map generic levels to Themed Names
    rank_map = {
        "level5": "Vikingur",
        "level4": "Fullsterkur",
        "level3": "Sterkur",
        "level2": "Halfsterkur",
        "level1": "Lazy Bones"
    }

    # Helper function to format the success message
    def create_result(level_key, threshold_val):
        return {
            "rank_name": rank_map.get(level_key, "Unknown"),
            "rank_level": level_key,
            "description": f"You achieved the standard of {threshold_val}."
        }

    # LOGIC A: HIGHER IS BETTER (Lifting)
    if scoring_direction == "higher_is_better":
        # Check from hardest (level5) down to easiest (level1)
        sorted_thresholds = sorted(thresholds, key=lambda x: x['value'], reverse=True)
        for t in sorted_thresholds:
            if comparison_value >= t['value']:
                return create_result(t['level'], t['value'])

    # LOGIC B: LOWER IS BETTER (Running)
    elif scoring_direction == "lower_is_better":
        # Check from fastest (level5) down to slowest (level1)
        sorted_thresholds = sorted(thresholds, key=lambda x: x['value'])
        for t in sorted_thresholds:
            if comparison_value <= t['value']:
                return create_result(t['level'], t['value'])

    # 6. Fallback if no rank met
    return {
        "rank_name": "Unranked",
        "rank_level": "0",
        "description": "Keep training to reach the first rank."
    }