// frontend/src/App.tsx
import { useState } from 'react';
import RankCard from './components/RankCard';
import { calculateRank, type RankResponse } from './services/api';

function App() {
  // 1. State Variables (To store user input)
  const [age, setAge] = useState<number>(37);
  const [sex, setSex] = useState<string>('male');
  const [testId, setTestId] = useState<string>('four_hundred_meter_run');
  const [resultValue, setResultValue] = useState<number>(0);
  
  // State to store the calculation coming back from Python
  const [rankData, setRankData] = useState<RankResponse | null>(null);

  // 2. The Function that calls the Backend
  const handleCalculate = async () => {
    try {
      const data = await calculateRank(testId, resultValue, age, sex);
      setRankData(data); // Save the result!
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Could not connect to the backend. Is it running?");
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Archetype Fitness Calculator</h1>
      
      {/* --- THE INPUT FORM --- */}
      <div style={{ background: '#eee', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Age: </label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(Number(e.target.value))}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Sex: </label>
          <select value={sex} onChange={(e) => setSex(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Test: </label>
          <select value={testId} onChange={(e) => setTestId(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="four_hundred_meter_run">400m Run</option>
            <option value="five_rm_front_squat">5RM Front Squat</option>
            <option value="dead_hang">Dead Hang</option>
            {/* We will add the rest later! */}
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>My Result: </label>
          <input 
            type="number" 
            value={resultValue} 
            onChange={(e) => setResultValue(Number(e.target.value))}
            placeholder="Seconds or Lbs"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        <button 
          onClick={handleCalculate}
          style={{ 
            padding: '10px 20px', 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Calculate Rank
        </button>
      </div>

      {/* --- THE RESULT DISPLAY --- */}
      <div style={{ marginTop: '30px' }}>
        {rankData && (
          <RankCard 
            exerciseName={testId}
            resultValue={resultValue.toString()}
            rankName={rankData.rank_name}
            rankDescription={rankData.description}
          />
        )}
      </div>
    </div>
  );
}

export default App;