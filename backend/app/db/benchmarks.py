# backend/app/db/benchmarks.py

MEN_STANDARDS = {
    "four_hundred_meter_run": {
        "meta": {"displayName": "400m Run", "unit": "time", "scoring": "lower_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 115}, {"level": "level2", "value": 90}, {"level": "level3", "value": 68}, {"level": "level4", "value": 62}, {"level": "level5", "value": 58}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 120}, {"level": "level2", "value": 95}, {"level": "level3", "value": 70}, {"level": "level4", "value": 64}, {"level": "level5", "value": 60}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 125}, {"level": "level2", "value": 100}, {"level": "level3", "value": 72}, {"level": "level4", "value": 66}, {"level": "level5", "value": 62}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 135}, {"level": "level2", "value": 110}, {"level": "level3", "value": 77}, {"level": "level4", "value": 70}, {"level": "level5", "value": 66}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 150}, {"level": "level2", "value": 125}, {"level": "level3", "value": 87}, {"level": "level4", "value": 80}, {"level": "level5", "value": 75}]}
        ]
    },
    "one_mile_run": {
        "meta": {"displayName": "1 Mile Run", "unit": "time", "scoring": "lower_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 630}, {"level": "level2", "value": 510}, {"level": "level3", "value": 435}, {"level": "level4", "value": 390}, {"level": "level5", "value": 345}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 645}, {"level": "level2", "value": 525}, {"level": "level3", "value": 450}, {"level": "level4", "value": 405}, {"level": "level5", "value": 360}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 675}, {"level": "level2", "value": 540}, {"level": "level3", "value": 465}, {"level": "level4", "value": 420}, {"level": "level5", "value": 375}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 720}, {"level": "level2", "value": 570}, {"level": "level3", "value": 495}, {"level": "level4", "value": 450}, {"level": "level5", "value": 405}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 900}, {"level": "level2", "value": 675}, {"level": "level3", "value": 555}, {"level": "level4", "value": 480}, {"level": "level5", "value": 420}]}
        ]
    },
    "kettlebell_swing_test": {
        "meta": {"displayName": "100 Kettlebell Swings (24kg)", "unit": "time", "scoring": "lower_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 600}, {"level": "level2", "value": 420}, {"level": "level3", "value": 300}, {"level": "level4", "value": 240}, {"level": "level5", "value": 180}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 615}, {"level": "level2", "value": 435}, {"level": "level3", "value": 315}, {"level": "level4", "value": 255}, {"level": "level5", "value": 195}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 630}, {"level": "level2", "value": 450}, {"level": "level3", "value": 330}, {"level": "level4", "value": 270}, {"level": "level5", "value": 210}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 660}, {"level": "level2", "value": 480}, {"level": "level3", "value": 360}, {"level": "level4", "value": 300}, {"level": "level5", "value": 240}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 720}, {"level": "level2", "value": 540}, {"level": "level3", "value": 420}, {"level": "level4", "value": 360}, {"level": "level5", "value": 300}]}
        ]
    },
    "dead_hang": {
        "meta": {"displayName": "Dead Hang", "unit": "seconds", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 71}, {"level": "level2", "value": 88}, {"level": "level3", "value": 108}, {"level": "level4", "value": 118}, {"level": "level5", "value": 176}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 72}, {"level": "level2", "value": 90}, {"level": "level3", "value": 105}, {"level": "level4", "value": 116}, {"level": "level5", "value": 175}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 70}, {"level": "level2", "value": 87}, {"level": "level3", "value": 97}, {"level": "level4", "value": 110}, {"level": "level5", "value": 165}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 65}, {"level": "level2", "value": 81}, {"level": "level3", "value": 96}, {"level": "level4", "value": 108}, {"level": "level5", "value": 162}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 58}, {"level": "level2", "value": 72}, {"level": "level3", "value": 86}, {"level": "level4", "value": 96}, {"level": "level5", "value": 144}]}
        ]
    },
    "max_distance_row": {
        "meta": {"displayName": "6:00 Max Distance Row", "unit": "meters", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 1342}, {"level": "level2", "value": 1595}, {"level": "level3", "value": 1772}, {"level": "level4", "value": 1913}, {"level": "level5", "value": 2062}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 1328}, {"level": "level2", "value": 1575}, {"level": "level3", "value": 1750}, {"level": "level4", "value": 1895}, {"level": "level5", "value": 1963}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 1292}, {"level": "level2", "value": 1525}, {"level": "level3", "value": 1713}, {"level": "level4", "value": 1813}, {"level": "level5", "value": 1904}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 1232}, {"level": "level2", "value": 1465}, {"level": "level3", "value": 1632}, {"level": "level4", "value": 1665}, {"level": "level5", "value": 1710}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 1095}, {"level": "level2", "value": 1302}, {"level": "level3", "value": 1450}, {"level": "level4", "value": 1480}, {"level": "level5", "value": 1520}]}
        ]
    },
    "peak_watt_echo_bike": {
        "meta": {"displayName": "10s Peak Watt Echo Bike", "unit": "watts", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 784}, {"level": "level2", "value": 909}, {"level": "level3", "value": 1530}, {"level": "level4", "value": 1568}, {"level": "level5", "value": 1764}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 770}, {"level": "level2", "value": 880}, {"level": "level3", "value": 1521}, {"level": "level4", "value": 1560}, {"level": "level5", "value": 1746}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 720}, {"level": "level2", "value": 900}, {"level": "level3", "value": 1254}, {"level": "level4", "value": 1500}, {"level": "level5", "value": 1650}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 640}, {"level": "level2", "value": 742}, {"level": "level3", "value": 1411}, {"level": "level4", "value": 1440}, {"level": "level5", "value": 1620}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 720}, {"level": "level2", "value": 835}, {"level": "level3", "value": 1254}, {"level": "level4", "value": 1280}, {"level": "level5", "value": 1440}]}
        ]
    },
    "max_calorie_echo_bike": {
        "meta": {"displayName": "3:00 Max Calorie Echo Bike", "unit": "calories", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 49}, {"level": "level2", "value": 57}, {"level": "level3", "value": 69}, {"level": "level4", "value": 75}, {"level": "level5", "value": 83}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 50}, {"level": "level2", "value": 56}, {"level": "level3", "value": 68}, {"level": "level4", "value": 74}, {"level": "level5", "value": 85}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 45}, {"level": "level2", "value": 58}, {"level": "level3", "value": 70}, {"level": "level4", "value": 72}, {"level": "level5", "value": 82}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 40}, {"level": "level2", "value": 52}, {"level": "level3", "value": 63}, {"level": "level4", "value": 67}, {"level": "level5", "value": 77}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 40}, {"level": "level2", "value": 48}, {"level": "level3", "value": 56}, {"level": "level4", "value": 59}, {"level": "level5", "value": 68}]}
        ]
    },
    "five_rm_front_squat": {
        "meta": {"displayName": "5RM Front Squat", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 0.64}, {"level": "level2", "value": 0.84}, {"level": "level3", "value": 1.05}, {"level": "level4", "value": 1.23}, {"level": "level5", "value": 1.57}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 0.65}, {"level": "level2", "value": 0.83}, {"level": "level3", "value": 1.02}, {"level": "level4", "value": 1.21}, {"level": "level5", "value": 1.60}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 0.63}, {"level": "level2", "value": 0.82}, {"level": "level3", "value": 0.94}, {"level": "level4", "value": 1.12}, {"level": "level5", "value": 1.44}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.52}, {"level": "level2", "value": 0.68}, {"level": "level3", "value": 0.84}, {"level": "level4", "value": 1.00}, {"level": "level5", "value": 1.28}]}
        ]
    },
    "five_rm_incline_bench": {
        "meta": {"displayName": "5RM Incline Bench", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 0.65}, {"level": "level2", "value": 0.81}, {"level": "level3", "value": 0.94}, {"level": "level4", "value": 1.08}, {"level": "level5", "value": 1.23}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 0.64}, {"level": "level2", "value": 0.83}, {"level": "level3", "value": 0.93}, {"level": "level4", "value": 1.07}, {"level": "level5", "value": 1.21}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 0.59}, {"level": "level2", "value": 0.74}, {"level": "level3", "value": 0.86}, {"level": "level4", "value": 0.99}, {"level": "level5", "value": 1.12}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.53}, {"level": "level2", "value": 0.66}, {"level": "level3", "value": 0.77}, {"level": "level4", "value": 0.88}, {"level": "level5", "value": 1.00}]}
        ]
    },
    "five_rm_sumo_deadlift": {
        "meta": {"displayName": "5RM Front Narrow Sumo Deadlift", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 1.14}, {"level": "level2", "value": 1.39}, {"level": "level3", "value": 1.69}, {"level": "level4", "value": 1.96}, {"level": "level5", "value": 2.35}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 1.11}, {"level": "level2", "value": 1.38}, {"level": "level3", "value": 1.72}, {"level": "level4", "value": 1.94}, {"level": "level5", "value": 2.33}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 1.03}, {"level": "level2", "value": 1.28}, {"level": "level3", "value": 1.55}, {"level": "level4", "value": 1.80}, {"level": "level5", "value": 2.16}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.91}, {"level": "level2", "value": 1.14}, {"level": "level3", "value": 1.38}, {"level": "level4", "value": 1.60}, {"level": "level5", "value": 1.92}]}
        ]
    },
    "five_rm_overhead_press": {
        "meta": {"displayName": "5RM Overhead Press", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": .35}, {"level": "level2", "value": .45}, {"level": "level3", "value": .55}, {"level": "level4", "value": .65}, {"level": "level5", "value": .75}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": .36}, {"level": "level2", "value": .46}, {"level": "level3", "value": .56}, {"level": "level4", "value": .66}, {"level": "level5", "value": .76}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": .34}, {"level": "level2", "value": .44}, {"level": "level3", "value": .54}, {"level": "level4", "value": .64}, {"level": "level5", "value": .74}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.3}, {"level": "level2", "value": .4}, {"level": "level3", "value": .5}, {"level": "level4", "value": .60}, {"level": "level5", "value": .7}]}
        ]
    },
    "five_rm_weighted_pull_up": {
        "meta": {"displayName": "5RM Weighted Pull-up", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.08}, {"level": "level3", "value": 1.20}, {"level": "level4", "value": 1.30}, {"level": "level5", "value": 1.40}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.05}, {"level": "level3", "value": 1.20}, {"level": "level4", "value": 1.30}, {"level": "level5", "value": 1.39}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.03}, {"level": "level3", "value": 1.17}, {"level": "level4", "value": 1.27}, {"level": "level5", "value": 1.35}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.01}, {"level": "level3", "value": 1.14}, {"level": "level4", "value": 1.24}, {"level": "level5", "value": 1.32}]}
        ]
    }
}

WOMEN_STANDARDS = {
    "four_hundred_meter_run": {
        "meta": {"displayName": "400m Run", "unit": "time", "scoring": "lower_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 132}, {"level": "level2", "value": 104}, {"level": "level3", "value": 78}, {"level": "level4", "value": 71}, {"level": "level5", "value": 67}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 138}, {"level": "level2", "value": 109}, {"level": "level3", "value": 81}, {"level": "level4", "value": 74}, {"level": "level5", "value": 69}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 144}, {"level": "level2", "value": 115}, {"level": "level3", "value": 83}, {"level": "level4", "value": 76}, {"level": "level5", "value": 71}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 155}, {"level": "level2", "value": 127}, {"level": "level3", "value": 90}, {"level": "level4", "value": 81}, {"level": "level5", "value": 76}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 173}, {"level": "level2", "value": 144}, {"level": "level3", "value": 102}, {"level": "level4", "value": 92}, {"level": "level5", "value": 86}]}
        ]
    },
    "one_mile_run": {
        "meta": {"displayName": "1 Mile Run", "unit": "time", "scoring": "lower_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 725}, {"level": "level2", "value": 587}, {"level": "level3", "value": 500}, {"level": "level4", "value": 449}, {"level": "level5", "value": 397}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 742}, {"level": "level2", "value": 604}, {"level": "level3", "value": 518}, {"level": "level4", "value": 466}, {"level": "level5", "value": 414}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 776}, {"level": "level2", "value": 621}, {"level": "level3", "value": 535}, {"level": "level4", "value": 483}, {"level": "level5", "value": 431}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 828}, {"level": "level2", "value": 656}, {"level": "level3", "value": 569}, {"level": "level4", "value": 518}, {"level": "level5", "value": 466}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 1035}, {"level": "level2", "value": 776}, {"level": "level3", "value": 638}, {"level": "level4", "value": 552}, {"level": "level5", "value": 483}]}
        ]
    },
    "kettlebell_swing_test": {
        "meta": {"displayName": "100 Kettlebell Swings (16kg)", "unit": "time", "scoring": "lower_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 720}, {"level": "level2", "value": 480}, {"level": "level3", "value": 360}, {"level": "level4", "value": 285}, {"level": "level5", "value": 210}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 740}, {"level": "level2", "value": 500}, {"level": "level3", "value": 375}, {"level": "level4", "value": 300}, {"level": "level5", "value": 225}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 755}, {"level": "level2", "value": 520}, {"level": "level3", "value": 390}, {"level": "level4", "value": 315}, {"level": "level5", "value": 240}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 790}, {"level": "level2", "value": 550}, {"level": "level3", "value": 410}, {"level": "level4", "value": 345}, {"level": "level5", "value": 270}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 865}, {"level": "level2", "value": 620}, {"level": "level3", "value": 480}, {"level": "level4", "value": 410}, {"level": "level5", "value": 345}]}
        ]
    },
    "dead_hang": {
        "meta": {"displayName": "Dead Hang", "unit": "seconds", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 53}, {"level": "level2", "value": 66}, {"level": "level3", "value": 81}, {"level": "level4", "value": 89}, {"level": "level5", "value": 132}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 54}, {"level": "level2", "value": 68}, {"level": "level3", "value": 79}, {"level": "level4", "value": 87}, {"level": "level5", "value": 131}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 53}, {"level": "level2", "value": 65}, {"level": "level3", "value": 73}, {"level": "level4", "value": 83}, {"level": "level5", "value": 124}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 49}, {"level": "level2", "value": 61}, {"level": "level3", "value": 72}, {"level": "level4", "value": 81}, {"level": "level5", "value": 122}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 44}, {"level": "level2", "value": 54}, {"level": "level3", "value": 65}, {"level": "level4", "value": 72}, {"level": "level5", "value": 108}]}
        ]
    },
    "max_distance_row": {
        "meta": {"displayName": "6:00 Max Distance Row", "unit": "meters", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 1141}, {"level": "level2", "value": 1356}, {"level": "level3", "value": 1506}, {"level": "level4", "value": 1626}, {"level": "level5", "value": 1753}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 1129}, {"level": "level2", "value": 1339}, {"level": "level3", "value": 1488}, {"level": "level4", "value": 1611}, {"level": "level5", "value": 1669}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 1098}, {"level": "level2", "value": 1296}, {"level": "level3", "value": 1456}, {"level": "level4", "value": 1541}, {"level": "level5", "value": 1618}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 1047}, {"level": "level2", "value": 1245}, {"level": "level3", "value": 1387}, {"level": "level4", "value": 1415}, {"level": "level5", "value": 1454}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 931}, {"level": "level2", "value": 1107}, {"level": "level3", "value": 1233}, {"level": "level4", "value": 1258}, {"level": "level5", "value": 1292}]}
        ]
    },
    "peak_watt_echo_bike": {
        "meta": {"displayName": "10s Peak Watt Echo Bike", "unit": "watts", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 549}, {"level": "level2", "value": 636}, {"level": "level3", "value": 1071}, {"level": "level4", "value": 1098}, {"level": "level5", "value": 1235}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 539}, {"level": "level2", "value": 616}, {"level": "level3", "value": 1065}, {"level": "level4", "value": 1092}, {"level": "level5", "value": 1222}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 504}, {"level": "level2", "value": 630}, {"level": "level3", "value": 878}, {"level": "level4", "value": 1050}, {"level": "level5", "value": 1155}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 448}, {"level": "level2", "value": 519}, {"level": "level3", "value": 988}, {"level": "level4", "value": 1008}, {"level": "level5", "value": 1134}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 504}, {"level": "level2", "value": 585}, {"level": "level3", "value": 878}, {"level": "level4", "value": 896}, {"level": "level5", "value": 1008}]}
        ]
    },
    "max_calorie_echo_bike": {
        "meta": {"displayName": "3:00 Max Calorie Echo Bike", "unit": "calories", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 37}, {"level": "level2", "value": 43}, {"level": "level3", "value": 52}, {"level": "level4", "value": 56}, {"level": "level5", "value": 62}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 38}, {"level": "level2", "value": 42}, {"level": "level3", "value": 51}, {"level": "level4", "value": 56}, {"level": "level5", "value": 64}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 34}, {"level": "level2", "value": 44}, {"level": "level3", "value": 53}, {"level": "level4", "value": 54}, {"level": "level5", "value": 62}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 30}, {"level": "level2", "value": 39}, {"level": "level3", "value": 47}, {"level": "level4", "value": 50}, {"level": "level5", "value": 58}]},
            {"minAge": 55, "maxAge": 999, "thresholds": [{"level": "level1", "value": 30}, {"level": "level2", "value": 36}, {"level": "level3", "value": 42}, {"level": "level4", "value": 44}, {"level": "level5", "value": 51}]}
        ]
    },
    "five_rm_front_squat": {
        "meta": {"displayName": "5RM Front Squat", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 0.45}, {"level": "level2", "value": 0.59}, {"level": "level3", "value": 0.74}, {"level": "level4", "value": 0.86}, {"level": "level5", "value": 1.10}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 0.46}, {"level": "level2", "value": 0.58}, {"level": "level3", "value": 0.71}, {"level": "level4", "value": 0.85}, {"level": "level5", "value": 1.12}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 0.44}, {"level": "level2", "value": 0.57}, {"level": "level3", "value": 0.66}, {"level": "level4", "value": 0.78}, {"level": "level5", "value": 1.01}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.36}, {"level": "level2", "value": 0.48}, {"level": "level3", "value": 0.59}, {"level": "level4", "value": 0.70}, {"level": "level5", "value": 0.90}]}
        ]
    },
    "five_rm_incline_bench": {
        "meta": {"displayName": "5RM Incline Bench", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 0.39}, {"level": "level2", "value": 0.49}, {"level": "level3", "value": 0.56}, {"level": "level4", "value": 0.65}, {"level": "level5", "value": 0.74}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 0.38}, {"level": "level2", "value": 0.50}, {"level": "level3", "value": 0.56}, {"level": "level4", "value": 0.64}, {"level": "level5", "value": 0.73}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 0.35}, {"level": "level2", "value": 0.44}, {"level": "level3", "value": 0.52}, {"level": "level4", "value": 0.59}, {"level": "level5", "value": 0.67}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.32}, {"level": "level2", "value": 0.40}, {"level": "level3", "value": 0.46}, {"level": "level4", "value": 0.53}, {"level": "level5", "value": 0.60}]}
        ]
    },
    "five_rm_sumo_deadlift": {
        "meta": {"displayName": "5RM Front Narrow Sumo Deadlift", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 0.80}, {"level": "level2", "value": 0.97}, {"level": "level3", "value": 1.18}, {"level": "level4", "value": 1.37}, {"level": "level5", "value": 1.65}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 0.78}, {"level": "level2", "value": 0.97}, {"level": "level3", "value": 1.20}, {"level": "level4", "value": 1.36}, {"level": "level5", "value": 1.63}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 0.72}, {"level": "level2", "value": 0.90}, {"level": "level3", "value": 1.09}, {"level": "level4", "value": 1.26}, {"level": "level5", "value": 1.51}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.64}, {"level": "level2", "value": 0.80}, {"level": "level3", "value": 0.97}, {"level": "level4", "value": 1.12}, {"level": "level5", "value": 1.34}]}
        ]
    },
    "five_rm_overhead_press": {
        "meta": {"displayName": "5RM Overhead Press", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": .2}, {"level": "level2", "value": .3}, {"level": "level3", "value": .4}, {"level": "level4", "value": .5}, {"level": "level5", "value": .6}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": .21}, {"level": "level2", "value": .31}, {"level": "level3", "value": .41}, {"level": "level4", "value": .51}, {"level": "level5", "value": .61}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": .19}, {"level": "level2", "value": .29}, {"level": "level3", "value": .39}, {"level": "level4", "value": .49}, {"level": "level5", "value": .59}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 0.15}, {"level": "level2", "value": .25}, {"level": "level3", "value": .35}, {"level": "level4", "value": .45}, {"level": "level5", "value": .55}]}
        ]
    },
    "five_rm_weighted_pull_up": {
        "meta": {"displayName": "5RM Weighted Pull-up", "unit": "xBW", "scoring": "higher_is_better"},
        "logic": [
            {"minAge": 18, "maxAge": 24, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.05}, {"level": "level3", "value": 1.12}, {"level": "level4", "value": 1.18}, {"level": "level5", "value": 1.24}]},
            {"minAge": 25, "maxAge": 34, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.03}, {"level": "level3", "value": 1.12}, {"level": "level4", "value": 1.18}, {"level": "level5", "value": 1.23}]},
            {"minAge": 35, "maxAge": 44, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.02}, {"level": "level3", "value": 1.10}, {"level": "level4", "value": 1.16}, {"level": "level5", "value": 1.21}]},
            {"minAge": 45, "maxAge": 54, "thresholds": [{"level": "level1", "value": 1.00}, {"level": "level2", "value": 1.01}, {"level": "level3", "value": 1.08}, {"level": "level4", "value": 1.14}, {"level": "level5", "value": 1.19}]}
        ]
    }
}

def get_standards(sex: str):
    """
    Returns the benchmark dictionary based on the user's sex.
    Defaults to MEN_STANDARDS if 'female' is not explicitly requested.
    """
    if sex.lower() == "female":
        return WOMEN_STANDARDS
    return MEN_STANDARDS