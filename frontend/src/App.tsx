import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState, useMemo } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import RankCard from './components/RankCard';
import { calculateRank, type RankResponse } from './services/api';
import { THEMES } from './data/themes'; 

// 1. DEFINE TYPES
interface ExerciseDefinition {
  id: string;
  displayName: string;
  unit: string;
  scoring: string;
  category: string; 
}

const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  // --- STATE: NAVIGATION & USER ---
  const [currentView, setCurrentView] = useState<'calculator' | 'profile'>('calculator');
  const [displayName, setDisplayName] = useState<string>('User');

  // --- STATE: APP DATA ---
  const [exercises, setExercises] = useState<ExerciseDefinition[]>([]);
  
  // --- STATE: CALCULATOR INPUTS ---
  const [age, setAge] = useState<number>(37);
  const [sex, setSex] = useState<string>('male');
  const [bodyweight, setBodyweight] = useState<number>(185); 
  const [exerciseId, setExerciseId] = useState<string>(''); 
  const [resultValue, setResultValue] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // --- STATE: UI & RESULTS ---
  const [rankData, setRankData] = useState<RankResponse | null>(null);
  const [currentTheme, setCurrentTheme] = useState<string>('dragon'); 
  const [isLoading, setIsLoading] = useState(false);

  // --- EFFECT: LOAD USER & EXERCISES ---
  useEffect(() => {
    async function loadData() {
      try {
        // 1. Get User Name
        try {
          const attributes = await fetchUserAttributes();
          setDisplayName(attributes.name || attributes.email || 'User');
        } catch (e) {
          console.log("Auth fetch error", e);
        }

        // 2. Get Exercises from Backend
        const response = await fetch(`${API_BASE_URL}/exercises`);
        const data = await response.json();
        setExercises(data);
        
        // Default to first exercise
        if (data.length > 0) setExerciseId(data[0].id);

      } catch (error) {
        console.error("Failed to load initial data:", error);
      }
    }
    loadData();
  }, []);

  // --- HELPER: GROUP EXERCISES FOR DROPDOWN ---
  const groupedExercises = useMemo(() => {
    const groups: Record<string, ExerciseDefinition[]> = {};
    exercises.forEach(ex => {
      const cat = ex.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(ex);
    });
    
    // Sort keys to ensure consistent order
    const orderedKeys = ["Strength (5 Rep Max)", "Endurance & Speed", "Power & Capacity", "Other"];
    const sortedGroups: Record<string, ExerciseDefinition[]> = {};
    
    orderedKeys.forEach(key => {
      if (groups[key]) sortedGroups[key] = groups[key];
    });
    // Add leftovers
    Object.keys(groups).forEach(key => {
      if (!sortedGroups[key]) sortedGroups[key] = groups[key];
    });

    return sortedGroups;
  }, [exercises]);

  // --- HELPER: DYNAMIC LOGIC ---
  const currentExercise = exercises.find(e => e.id === exerciseId);
  const isTimeBased = currentExercise?.unit === 'time' || currentExercise?.unit === 'seconds';
  const unitLabel = currentExercise?.unit === 'xBW' ? 'lbs' : (currentExercise?.unit || 'Score');

  const handleCalculate = async () => {
    setIsLoading(true);
    try {
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

  const getDisplayValue = () => {
    if (isTimeBased) {
      if (minutes > 0) return `${minutes}m ${seconds}s`;
      return `${seconds}s`;
    }
    return `${resultValue} ${unitLabel}`;
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen bg-zinc-900 text-white font-sans selection:bg-orange-500 selection:text-white">
          
          {/* NAVBAR */}
          <nav className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Logo / Home Click */}
              <div className="cursor-pointer" onClick={() => setCurrentView('calculator')}>
                <h1 className="text-2xl font-black tracking-tighter italic">
                  PROVING <span className="text-orange-500">GROUND</span>
                </h1>
              </div>
              
              <div className="flex items-center gap-6">
                {/* NAVIGATION TABS */}
                <div className="flex gap-2 bg-zinc-800/50 p-1 rounded-lg">
                  <button 
                    onClick={() => setCurrentView('calculator')}
                    className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${currentView === 'calculator' ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Calculator
                  </button>
                  <button 
                    onClick={() => setCurrentView('profile')}
                    className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${currentView === 'profile' ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Profile
                  </button>
                </div>

                {/* USER & THEME */}
                <div className="flex items-center gap-4 border-l border-zinc-700 pl-6">
                  <div className="hidden md:flex flex-col items-end">
                     <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Logged in as</span>
                     <span className="text-sm font-bold text-zinc-300">{displayName}</span>
                  </div>
                  
                  <button 
                    onClick={signOut}
                    className="bg-zinc-800 hover:bg-red-900/50 text-zinc-400 hover:text-red-400 border border-zinc-700 text-xs font-bold py-2 px-3 rounded transition"
                  >
                    Sign Out
                  </button>

                  {/* Theme Selector */}
                  <div className="hidden sm:block">
                    <select 
                      value={currentTheme} 
                      onChange={(e) => setCurrentTheme(e.target.value)} 
                      className="bg-zinc-800 text-zinc-400 text-xs font-bold py-1.5 px-2 rounded-lg outline-none focus:ring-1 focus:ring-orange-500 border border-zinc-700 cursor-pointer"
                    >
                      {Object.keys(THEMES).map((key) => (
                        <option key={key} value={key}>{THEMES[key].displayName}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* MAIN CONTENT AREA */}
          <main className="max-w-5xl mx-auto px-4 py-12">
            
            {/* CONDITIONAL RENDERING: PROFILE vs CALCULATOR */}
            {currentView === 'profile' ? (
              <UserProfile displayName={displayName} />
            ) : (
              <div className="flex flex-col md:flex-row gap-12 items-start">
                
                {/* LEFT COLUMN: CALCULATOR FORM */}
                <section className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 shadow-xl backdrop-blur-sm animate-fade-in-up">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-orange-500 w-2 h-6 rounded-full inline-block"></span>
                    Enter Your Stats
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Age</label>
                      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Sex</label>
                      <select value={sex} onChange={(e) => setSex(e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Bodyweight (lbs)</label>
                    <input type="number" value={bodyweight} onChange={(e) => setBodyweight(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Select Exercise</label>
                    <select 
                      value={exerciseId} 
                      onChange={(e) => setExerciseId(e.target.value)} 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition"
                    >
                      {exercises.length === 0 && <option>Loading exercises...</option>}
                      {Object.entries(groupedExercises).map(([category, items]) => (
                        <optgroup key={category} label={category}>
                          {items.map((ex) => (
                            <option key={ex.id} value={ex.id}>{ex.displayName}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    {isTimeBased ? (
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Time Result</label>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} placeholder="Min" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-lg font-mono focus:border-orange-500 outline-none transition text-center" />
                            <span className="text-xs text-zinc-500 mt-1 block text-center">Minutes</span>
                          </div>
                          <div className="flex items-center text-xl font-bold text-zinc-600">:</div>
                          <div className="flex-1">
                            <input type="number" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} placeholder="Sec" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-lg font-mono focus:border-orange-500 outline-none transition text-center" />
                            <span className="text-xs text-zinc-500 mt-1 block text-center">Seconds</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Result ({unitLabel})</label>
                        <input type="number" value={resultValue} onChange={(e) => setResultValue(Number(e.target.value))} placeholder="Enter your score..." className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-lg font-mono focus:border-orange-500 outline-none transition" />
                      </div>
                    )}
                  </div>
                  
                  <button onClick={handleCalculate} disabled={isLoading} className={`w-full py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all transform active:scale-95 shadow-lg ${isLoading ? 'bg-zinc-600 cursor-not-allowed' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white hover:shadow-orange-500/20'}`}>
                    {isLoading ? 'Calculating...' : 'Calculate Rank'}
                  </button>
                </section>

                {/* RIGHT COLUMN: RESULT CARD */}
                <section className="w-full md:w-1/2 flex justify-center items-start">
                  {rankData ? (
                    <div className="animate-fade-in-up w-full flex justify-center">
                      <RankCard 
                        exerciseName={currentExercise?.displayName || exerciseId}
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
              </div>
            )}
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default App;