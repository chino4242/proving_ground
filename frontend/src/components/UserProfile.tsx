import { useState } from 'react';

// 1. DEFINE DATA TYPES
// In a real app, you would fetch this from your DynamoDB 'History' table
interface ExerciseHistory {
  name: string;
  currentLevel: number;
  output: string;
  pr: string;
}

// 2. MOCK DATA 
const MOCK_HISTORY: ExerciseHistory[] = [
  { name: 'Overhead Press', currentLevel: 3, output: '110 lbs', pr: '110 lbs' },
  { name: 'Front Squat', currentLevel: 2, output: '155 lbs', pr: '130 lbs' },
  { name: 'Incline Bench', currentLevel: 3, output: '165 lbs', pr: '150 lbs' },
  { name: '6:00 Max Distance', currentLevel: 1, output: '1518m', pr: '1518m' },
  { name: 'Dead Hang', currentLevel: 0, output: '45s', pr: '45s' },
];

interface UserProfileProps {
  displayName: string;
}

export default function UserProfile({ displayName }: UserProfileProps) {
  const [weight, setWeight] = useState<number>(185);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveWeight = () => {
    // TODO: Connect this to your API endpoint later
    console.log("Saving new weight:", weight);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in-up">
      
      {/* HEADER CARD */}
      <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 shadow-xl backdrop-blur-sm mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter text-white">
              {displayName}'S <span className="text-orange-500">PROFILE</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-1">Manage your stats and view progress.</p>
          </div>

          {/* WEIGHT INPUT */}
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 flex items-center gap-4">
            <div className="text-right">
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                Current Weight
              </label>
              <div className="flex items-center justify-end gap-2">
                {isEditing ? (
                  <>
                    <input 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-20 bg-zinc-800 text-white font-mono text-2xl font-bold border-b-2 border-orange-500 outline-none text-right"
                      autoFocus
                    />
                    <button 
                      onClick={handleSaveWeight}
                      className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded transition"
                    >
                      SAVE
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-mono text-white font-bold tracking-tight">{weight}</span>
                    <span className="text-zinc-500 text-sm font-medium pt-2">lbs</span>
                    <button 
                      onClick={() => setIsEditing(true)} 
                      className="ml-2 p-1 text-zinc-600 hover:text-orange-500 transition"
                    >
                      ✏️
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HISTORY TABLE */}
      <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900">
          <h3 className="font-bold text-zinc-300">Recent Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-zinc-500 text-xs uppercase tracking-wider border-b border-zinc-800 bg-zinc-900/50">
                <th className="py-4 pl-6 font-bold">Exercise</th>
                <th className="py-4 text-center font-bold">Current Level</th>
                <th className="py-4 text-right font-bold">Output</th>
                <th className="py-4 text-right pr-6 font-bold">Personal Record</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-800">
              {MOCK_HISTORY.map((item, index) => (
                <tr key={index} className="hover:bg-zinc-800/50 transition group">
                  <td className="py-4 pl-6 font-medium text-white">{item.name}</td>
                  <td className="py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold
                      ${item.currentLevel >= 3 ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 
                        item.currentLevel >= 1 ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-800 text-zinc-600'}`}>
                      Level {item.currentLevel}
                    </span>
                  </td>
                  <td className="py-4 text-right font-mono text-zinc-400">{item.output}</td>
                  <td className="py-4 text-right pr-6 font-mono text-white font-bold group-hover:text-orange-400 transition">
                    {item.pr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}