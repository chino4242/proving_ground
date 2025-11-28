import { useState } from 'react';
import RankCard from './components/RankCard';
import { calculateRank, type RankResponse } from './services/api';
import { THEMES } from './data/themes'; 

// 1. Define the "Nice Names" for every exercise ID
const EXERCISE_DISPLAY_NAMES: { [key: string]: string } = {
  five_rm_front_squat: "5RM Front Squat",
  five_rm_incline_bench: "5RM Incline Bench",
  five_rm_sumo_deadlift: "5RM Narrow Sumo Deadlift",
  five_rm_weighted_pull_up: "5RM Weighted Pull-up",
  four_hundred_meter_run: "400m Run",
  one_mile_run: "1 Mile Run",
  max_distance_row: "6:00 Max Distance Row",
  peak_watt_echo_bike: "10s Peak Watt (Echo Bike)",
  max_calorie_echo_bike: "3:00 Max Calorie (Echo Bike)",
  kettlebell_swing_test: "100 Kettlebell Swings (Time)",
  dead_hang: "Dead Hang (Time)"
};

function App() {
  const [age, setAge] = useState<number>(37);
  const [sex, setSex] = useState<string>('male');
  
  const [bodyweight, setBodyweight] = useState<number>(185); 
  
  const [exerciseId, setExerciseId] = useState<string>('five_rm_front_squat'); 
  const [resultValue, setResultValue] = useState<number>(225);
  
  const [rankData, setRankData] = useState<RankResponse | null>(null);
  const [currentTheme, setCurrentTheme] = useState<string>('dragon'); 

  const handleCalculate = async () => {
    try {
      const data = await calculateRank(exerciseId, resultValue, age, sex, bodyweight);
      setRankData(data);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Could not connect to the backend. Is it running?");
    }
  };

  const getThemeDetails = (level: string) => {
    const theme = THEMES[currentTheme];
    return theme.ranks[level] || theme.ranks['level0'];
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#222', minHeight: '100vh', color: 'white' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1>Proving Ground Fitness</h1>
        <div>
          <label style={{ marginRight: '10px' }}>Theme:</label>
          <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} style={{ padding: '8px', borderRadius: '4px' }}>
            {Object.keys(THEMES).map((key) => (
              <option key={key} value={key}>{THEMES[key].displayName}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div style={{ background: '#333', padding: '20px', borderRadius: '8px', maxWidth: '400px', border: '1px solid #444' }}>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} style={{ marginLeft: '10px', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Sex: </label>
          <select value={sex} onChange={(e) => setSex(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Bodyweight (lbs): </label>
          <input 
            type="number" 
            value={bodyweight} 
            onChange={(e) => setBodyweight(Number(e.target.value))} 
            style={{ marginLeft: '10px', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Exercise: </label>
          <select 
            value={exerciseId} 
            onChange={(e) => setExerciseId(e.target.value)} 
            style={{ marginLeft: '10px', padding: '5px', maxWidth: '250px' }}
          >
            <optgroup label="Strength (5 Rep Max)">
              <option value="five_rm_front_squat">Front Squat</option>
              <option value="five_rm_incline_bench">Incline Bench</option>
              <option value="five_rm_sumo_deadlift">Narrow Sumo Deadlift</option>
              <option value="five_rm_weighted_pull_up">Weighted Pull-up</option>
            </optgroup>

            <optgroup label="Endurance & Speed">
              <option value="four_hundred_meter_run">400m Run</option>
              <option value="one_mile_run">1 Mile Run</option>
              <option value="max_distance_row">6:00 Max Distance Row</option>
            </optgroup>

            <optgroup label="Power & Capacity">
              <option value="peak_watt_echo_bike">10s Peak Watt (Echo Bike)</option>
              <option value="max_calorie_echo_bike">3:00 Max Calorie (Echo Bike)</option>
              <option value="kettlebell_swing_test">100 Kettlebell Swings (Time)</option>
              <option value="dead_hang">Dead Hang (Time)</option>
            </optgroup>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Result: </label>
          <input type="number" value={resultValue} onChange={(e) => setResultValue(Number(e.target.value))} placeholder="Val" style={{ marginLeft: '10px', padding: '5px' }} />
        </div>
        
        <button onClick={handleCalculate} style={{ width: '100%', padding: '10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          CALCULATE RANK
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        {rankData && (
          <RankCard 
            // 2. USE THE MAPPING HERE instead of raw ID
            exerciseName={EXERCISE_DISPLAY_NAMES[exerciseId] || exerciseId}
            resultValue={resultValue.toString()}
            rankName={getThemeDetails(rankData.rank_level).name}
            rankDescription={getThemeDetails(rankData.rank_level).description}
            bodyweight={bodyweight}
            calculationDetails={rankData.description} 
            rankImage={getThemeDetails(rankData.rank_level).image}
          />
        )}
      </div>
    </div>
  );
}

export default App;