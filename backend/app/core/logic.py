from app.db.benchmarks import get_standards

def calculate_level(sex: str, age: int, current_bodyweight: float, exercise_id: str, raw_value: float):
    #Calculates the generic performance level based on user input
    
    #1. Get the correct standards (Men vs Women)
    standards = get_standards(sex)
    
    if exercise_id not in standards:
        return "exercise_not_found"
    
    exercise_data = standards[exercise_id]
    meta = exercise_data['meta']
    
    comparison_value = raw_value
    
    if meta['unit'] == 'xBW':
        if current_bodyweight <= 0:
            return "invalid_bodyweight"

        if exercise_id == "five_rm_weighted_pull_up":
            comparison_value = (current_bodyweight + raw_value) / current_bodyweight
        else:
            comparison_value = raw_value / current_bodyweight
    
    active_bracket = None
    for bracket in exercise_data['logic']:
        if bracket['minAge'] <= age <= bracket['maxAge']:
            active_bracket = bracket
            break
    
    if not active_bracket:
        return "age_out_of_range"
    
    thresholds = active_bracket['thresholds']
    scoring_directon = meta['scoring']
    
    levels_to_check = ["level5", "level4", "level3", "level2", "level1"]
    
    threshold_map = {t['level']: t['value'] for t in thresholds}
    
    for level in levels_to_check:
        benchmark_value = threshold_map.get(level)
        if benchmark_value is None:
            continue
        
        if scoring_directon == "higher_is_better":
            if comparison_value > benchmark_value:
                return level
        
        elif scoring_directon == "lower_is_better":
            if comparison_value <= benchmark_value:
                return level
    return "below_level1"