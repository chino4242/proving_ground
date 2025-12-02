import React from 'react';

interface RankCardProps {
  exerciseName: string;
  resultValue: string;
  rankName: string;
  rankDescription: string;
  bodyweight?: number;
  calculationDetails?: string; 
  rankImage?: string;
}

const RankCard: React.FC<RankCardProps> = ({ 
  exerciseName, 
  resultValue, 
  rankName, 
  rankDescription,
  bodyweight,
  calculationDetails,
  rankImage
}) => {
  
  return (
    <div className="bg-white text-zinc-800 rounded-xl shadow-2xl overflow-hidden max-w-sm w-full transform transition hover:scale-105 duration-300">
      
      {/* Header / Image Area */}
      <div className="relative h-48 bg-zinc-100 flex items-center justify-center p-4">
        {rankImage ? (
          <img 
            src={rankImage} 
            alt={rankName} 
            className="h-full w-auto object-contain drop-shadow-lg"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
        ) : (
          <div className="text-4xl">🏆</div>
        )}
        <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-b from-black/50 to-transparent">
          <h3 className="text-white font-bold text-lg px-2">{exerciseName}</h3>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Result</p>
            <p className="text-2xl font-bold text-zinc-900">{resultValue}</p>
          </div>
          {bodyweight && (
            <div className="text-right">
              <p className="text-xs text-zinc-400">Bodyweight</p>
              <p className="text-sm font-medium text-zinc-600">{bodyweight} lbs</p>
            </div>
          )}
        </div>

        {/* Rank Title */}
        <div className="mb-2">
          <h2 className="text-3xl font-extrabold text-orange-600 leading-tight">
            {rankName}
          </h2>
        </div>

        {/* Description */}
        <p className="text-zinc-600 italic text-sm mb-4 leading-relaxed">
          "{rankDescription}"
        </p>

        {/* Math Details Box */}
        {calculationDetails && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r text-sm text-blue-800">
            {calculationDetails}
          </div>
        )}
      </div>
    </div>
  );
};

export default RankCard;