# backend/tests/test_logic.py
import pytest
from app.core.logic import calculate_rank

# Test Case 1: Bodyweight Ratio (Higher is Better)
# Scenario: 225 lbs lifted @ 185 lbs BW = 1.21 ratio
# Expectation: This should be Level 4 (Fullsterkur) for Men 35-44 (Threshold is 1.12)
def test_calculate_rank_front_squat_success():
    result = calculate_rank(
        exercise_id="five_rm_front_squat",
        value=225,
        age=37,
        sex="male",
        bodyweight=185
    )
    
    assert result["rank_name"] == "Fullsterkur"
    assert result["rank_level"] == "level4"

# Test Case 2: Running (Lower is Better)
# Scenario: 75 seconds for 400m
# Expectation: Level 2 (Halfsterkur) for Men 35-44 (Threshold is 100s, but slower than Sterkur 72s)
def test_calculate_rank_running_success():
    result = calculate_rank(
        exercise_id="four_hundred_meter_run",
        value=75,
        age=37,
        sex="male",
        bodyweight=185 # Bodyweight ignored for running
    )
    
    assert result["rank_name"] == "Halfsterkur"
    assert result["rank_level"] == "level2"

# Test Case 3: Error Handling (Missing Bodyweight)
# Scenario: Lifting exercise but user enters 0 bodyweight
# Expectation: Should return an Error rank
def test_calculate_rank_missing_bodyweight():
    result = calculate_rank(
        exercise_id="five_rm_front_squat",
        value=225,
        age=37,
        sex="male",
        bodyweight=0 # Invalid!
    )
    
    assert result["rank_name"] == "Error"
    assert "Bodyweight required" in result["description"]
    
# --- 1. Weighted Pull-up Logic (Special Formula) ---
def test_weighted_pullup_calculation():
    # Formula: (BW + Weight) / BW
    # Scenario: 200lb Male, 18-24. Needs 1.40x for Level 5 (Vikingur).
    # Math: (200 + 80) / 200 = 1.40.
    result = calculate_rank(
        exercise_id="five_rm_weighted_pull_up",
        value=80,       # Added weight
        age=20,
        sex="male",
        bodyweight=200
    )
    
    assert result["rank_level"] == "level5"
    assert result["rank_name"] == "Vikingur"
    # Verify description formatting for xBW
    assert "1.40x BW" in result["description"]

# --- 2. Exact Threshold Boundary (Edge Case) ---
def test_exact_threshold_match():
    # Scenario: 400m Run. Men 18-24. Level 5 cut-off is exactly 58 seconds.
    # If user runs exactly 58s, they should get the rank.
    result = calculate_rank(
        exercise_id="four_hundred_meter_run",
        value=58,
        age=20,
        sex="male",
        bodyweight=180
    )
    
    assert result["rank_level"] == "level5"
    assert result["rank_name"] == "Vikingur"

def test_missed_threshold_by_one_second():
    # Scenario: 400m Run. Men 18-24. Level 5 cut-off is 58s.
    # User runs 59s. Should drop to Level 4 (Cutoff 62s).
    result = calculate_rank(
        exercise_id="four_hundred_meter_run",
        value=59,
        age=20,
        sex="male",
        bodyweight=180
    )
    
    assert result["rank_level"] == "level4"
    assert result["rank_name"] == "Fullsterkur"

# --- 3. Female Standards Lookup ---
def test_female_standards_lookup():
    # Scenario: 1 Mile Run. Women 25-34.
    # Level 1 (Lazy Bones) cutoff is 742s (12:22).
    # User runs 700s. Should be Level 1.
    result = calculate_rank(
        exercise_id="one_mile_run",
        value=700,
        age=30,
        sex="female",
        bodyweight=140
    )
    
    assert result["rank_level"] == "level1"
    assert "Lazy Bones" in result["rank_name"]

# --- 4. Unranked / Too Weak / Too Slow ---
def test_unranked_result():
    # Scenario: 5RM Front Squat. Men 18-24.
    # Level 1 cutoff is 0.64x BW.
    # User: 150lb BW, Lifts 50lbs. Ratio = 0.33x.
    result = calculate_rank(
        exercise_id="five_rm_front_squat",
        value=50,
        age=20,
        sex="male",
        bodyweight=150
    )
    
    assert result["rank_level"] == "0"
    assert result["rank_name"] == "Unranked"
    assert "Keep training" in result["description"]

# --- 5. Age Bracket Edge Cases ---
def test_age_bracket_transition():
    # Men's 400m: 
    # 18-24 Level 3 is 68s.
    # 25-34 Level 3 is 70s.
    
    # User runs 69s.
    # If age 24, they MISS Level 3 (needs 68s) -> Level 2.
    result_younger = calculate_rank("four_hundred_meter_run", 69, 24, "male", 180)
    assert result_younger["rank_level"] == "level2"
    
    # If age 25, they HIT Level 3 (needs 70s).
    result_older = calculate_rank("four_hundred_meter_run", 69, 25, "male", 180)
    assert result_older["rank_level"] == "level3"


