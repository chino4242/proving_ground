# backend/app/core/logic.py
from app.db.benchmarks import get_standards

def calculate_rank(exercise_id: str, value: float, age: int, sex: str, bodyweight: float) -> dict:
    # 1. Get the correct Rulebook (Men vs Women)
    standards = get_standards(sex)
    
    # 2. Check if the test exists
    if exercise_id not in standards:
        return {
            "rank_name": "Unknown Exercise",
            "rank_level": "0",
            "description": "Exercise ID not found in database."
        }

    exercise_data = standards[exercise_id]
    meta = exercise_data['meta']
    scoring_direction = meta['scoring']
    unit = meta.get('unit', '')
    
    # 3. Handle Bodyweight Logic (Future Proofing)
    # Your logic handled xBW, but currently the frontend only sends raw value.
    # We will treat 'value' as the final comparison value for now.
    comparison_value = value
    if unit == 'xBW':
        if bodyweight <= 0:
             return {"rank_name": "Error", "rank_level": "0", "description": "Bodyweight required."}
        
        # Special case for weighted pull-ups
        if exercise_id == 'five_rm_weighted_pull_up':
            comparison_value = (bodyweight + value) / bodyweight
        else:
            comparison_value = value / bodyweight

    # 4. Find the correct Age Bracket
    age_bracket = None
    for bracket in exercise_data["logic"]:
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
        desc = f"You achieved the standard of {threshold_val}."
        if unit == 'xBW':
            desc = f"You achieved {comparison_value:.2f}x BW (Standard: {threshold_val}x BW)."
        elif unit == 'time':
             desc = f"You ran {value}s (Standard: {threshold_val}s)."

        return {
            "rank_name": rank_map.get(level_key, "Unknown"),
            "rank_level": level_key,
            "description": desc
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