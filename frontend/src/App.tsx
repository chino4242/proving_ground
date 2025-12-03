import { useState, useEffect } from 'react';
import RankCard from './components/RankCard';
import { calculateRank, type RankResponse } from './services/api';
import { THEMES } from './data/themes'; 

// 1. MAPPING DICTIONARY
const EXERCISE_DISPLAY_NAMES: { [key: string]: string } = {
  five_rm_overhead_press: "5RM Overhead Press", 
  five_rm_front_squat: "5RM Front Squat",
  five_rm_incline_bench: "5RM Incline Bench",
  five_rm_sumo_deadlift: "5RM Narrow Sumo Deadlift",
  five_rm_weighted_pull_up: "5RM Weighted Pull-up",
  four_hundred_meter_run: "400m Run",
  one_mile_run: "1 Mile Run",
  max_distance_row: "6:00 Max Distance Row",
  peak_watt_echo_bike: "10s Peak Watt",
  max_calorie_echo_bike: "3:00 Max Calorie",
  kettlebell_swing_test: "100 Kettlebell Swings",
  dead_hang: "Dead Hang"
};

// 2. DEFINE TIME-BASED EXERCISES
// These IDs require Minute/Second inputs instead of a single value
const TIME_BASED_EXERCISES = [
  "four_hundred_meter_run",
  "one_mile_run",
  "kettlebell_swing_test",
  "dead_hang"
];

function App() {
  const [age, setAge] = useState<number>(37);
  const [sex, setSex] = useState<string>('male');
  const [bodyweight, setBodyweight] = useState<number>(185); 
  const [exerciseId, setExerciseId] = useState<string>('five_rm_front_squat'); 
  
  // State for Weight/Distance/Watts
  const [resultValue, setResultValue] = useState<number>(0);
  
  // New State for Time
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const [rankData, setRankData] = useState<RankResponse | null>(null);
  const [currentTheme, setCurrentTheme] = useState<string>('dragon'); 
  const [isLoading, setIsLoading] = useState(false);

  // Helper to check if current exercise is time-based
  const isTimeBased = TIME_BASED_EXERCISES.includes(exerciseId);

  const handleCalculate = async () => {
    setIsLoading(true);
    try {
      // Logic: If time-based, calculate total seconds. Otherwise use resultValue.
      let finalValue = resultValue;
      
      if (isTimeBased) {
        finalValue = (minutes * 60) + seconds;
      }

      const data = await calculateRank(exerciseId, finalValue, age, sex, bodyweight);
      setRankData(data);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Could not connect to the backend. Is it running?");
    } finally {
      setIsLoading(false);
    }
  };

  const getThemeDetails = (level: string) => {
    const theme = THEMES[currentTheme];
    return theme.ranks[level] || theme.ranks['level0'];
  };

  // Helper to display the formatted result string on the card
  const getDisplayValue = () => {
    if (isTimeBased) {
      // Format as MM:SS if minutes exist, otherwise just SSs
      if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
      }
      return `${seconds}s`;
    }
    return resultValue.toString();
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-black tracking-tighter italic">
            PROVING <span className="text-orange-500">GROUND</span>
          </h1>
          
          <div className="flex items-center gap-3 bg-zinc-800 p-1 rounded-lg">
            <span className="text-xs font-bold text-zinc-400 px-2 uppercase tracking-widest">Theme</span>
            <select 
              value={currentTheme} 
              onChange={(e) => setCurrentTheme(e.target.value)} 
              className="bg-zinc-700 text-white text-sm py-1.5 px-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500 border-none cursor-pointer hover:bg-zinc-600 transition"
            >
              {Object.keys(THEMES).map((key) => (
                <option key={key} value={key}>{THEMES[key].displayName}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12 items-start">
        
        {/* LEFT COLUMN: CALCULATOR FORM */}
        <section className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-orange-500 w-2 h-6 rounded-full inline-block"></span>
            Enter Your Stats
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Age</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))} 
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Sex</label>
              <select 
                value={sex} 
                onChange={(e) => setSex(e.target.value)} 
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Bodyweight (lbs)</label>
            <input 
              type="number" 
              value={bodyweight} 
              onChange={(e) => setBodyweight(Number(e.target.value))} 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Select Exercise</label>
            <select 
              value={exerciseId} 
              onChange={(e) => setExerciseId(e.target.value)} 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition"
            >
              <optgroup label="Strength (5 Rep Max)">
                <option value="five_rm_front_squat">Front Squat</option>
                <option value="five_rm_incline_bench">Incline Bench</option>
                <option value="five_rm_sumo_deadlift">Narrow Sumo Deadlift</option>
                <option value="five_rm_weighted_pull_up">Weighted Pull-up</option>
                <option value="five_rm_overhead_press">Overhead Press</option>
              </optgroup>
              <optgroup label="Endurance & Speed">
                <option value="four_hundred_meter_run">400m Run (Time)</option>
                <option value="one_mile_run">1 Mile Run (Time)</option>
                <option value="max_distance_row">6:00 Max Distance Row (Meters)</option>
              </optgroup>
              <optgroup label="Power & Capacity">
                <option value="peak_watt_echo_bike">10s Peak Watt</option>
                <option value="max_calorie_echo_bike">3:00 Max Calorie</option>
                <option value="kettlebell_swing_test">100 Kettlebell Swings (Time)</option>
                <option value="dead_hang">Dead Hang (Time)</option>
              </optgroup>
            </select>
          </div>

          {/* DYNAMIC INPUT SECTION */}
          <div className="mb-8">
            {isTimeBased ? (
              // TIME INPUTS (Minutes : Seconds)
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Time Result</label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input 
                      type="number" 
                      value={minutes} 
                      onChange={(e) => setMinutes(Number(e.target.value))} 
                      placeholder="Min" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-lg font-mono focus:border-orange-500 outline-none transition text-center"
                    />
                    <span className="text-xs text-zinc-500 mt-1 block text-center">Minutes</span>
                  </div>
                  <div className="flex items-center text-xl font-bold text-zinc-600">:</div>
                  <div className="flex-1">
                    <input 
                      type="number" 
                      value={seconds} 
                      onChange={(e) => setSeconds(Number(e.target.value))} 
                      placeholder="Sec" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-lg font-mono focus:border-orange-500 outline-none transition text-center"
                    />
                    <span className="text-xs text-zinc-500 mt-1 block text-center">Seconds</span>
                  </div>
                </div>
              </div>
            ) : (
              // STANDARD INPUT (Weight / Watts / Meters)
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">
                  Result {exerciseId === 'max_distance_row' ? '(Meters)' : '(lbs / watts)'}
                </label>
                <input 
                  type="number" 
                  value={resultValue} 
                  onChange={(e) => setResultValue(Number(e.target.value))} 
                  placeholder="Enter your score..." 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-lg font-mono focus:border-orange-500 outline-none transition"
                />
              </div>
            )}
          </div>
          
          <button 
            onClick={handleCalculate} 
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all transform active:scale-95 shadow-lg
              ${isLoading ? 'bg-zinc-600 cursor-not-allowed' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white hover:shadow-orange-500/20'}
            `}
          >
            {isLoading ? 'Calculating...' : 'Calculate Rank'}
          </button>
        </section>

        {/* RIGHT COLUMN: RESULT CARD */}
        <section className="w-full md:w-1/2 flex justify-center items-start">
          {rankData ? (
            <div className="animate-fade-in-up w-full flex justify-center">
              <RankCard 
                exerciseName={EXERCISE_DISPLAY_NAMES[exerciseId] || exerciseId}
                // Use the formatted display value (e.g., "6m 30s" or "225")
                resultValue={getDisplayValue()}
                rankName={getThemeDetails(rankData.rank_level).name}
                rankDescription={getThemeDetails(rankData.rank_level).description}
                bodyweight={bodyweight}
                calculationDetails={rankData.description} 
                rankImage={getThemeDetails(rankData.rank_level).image}
              />
            </div>
          ) : (
            <div className="h-64 w-full border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-600 p-8 text-center">
              <span className="text-4xl mb-4 opacity-50">⏱️</span>
              <p className="text-sm font-medium">Select an exercise to begin.</p>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}

export default App;