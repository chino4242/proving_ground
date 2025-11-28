import React from 'react';

interface RankCardProps {
  exerciseName: string;
  resultValue: string;
  rankName: string;
  rankDescription: string;
  bodyweight?: number;
  calculationDetails?: string; // New prop for the math explanation
}

const RankCard: React.FC<RankCardProps> = ({ 
  exerciseName, 
  resultValue, 
  rankName, 
  rankDescription,
  bodyweight,
  calculationDetails
}) => {
  
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  };

  const headerStyle = {
    borderBottom: '2px solid #333',
    paddingBottom: '8px',
    marginBottom: '8px',
    fontWeight: 'bold' as const,
    fontSize: '1.2rem'
  };

  const rankStyle = {
    color: '#d35400',
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    margin: '10px 0 5px 0'
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{exerciseName}</div>
      
      <div style={{ marginBottom: '5px' }}>
        <strong>My Result: </strong> {resultValue}
      </div>

      {bodyweight && (
        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>
          <strong>Bodyweight: </strong> {bodyweight} lbs
        </div>
      )}

      {/* Math Details Box */}
      {calculationDetails && (
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#2980b9', 
          backgroundColor: '#eaf2f8', 
          padding: '8px', 
          borderRadius: '4px',
          borderLeft: '3px solid #2980b9'
        }}>
          {calculationDetails}
        </div>
      )}

      <div style={rankStyle}>{rankName}</div>
      
      <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '0' }}>
        <em>"{rankDescription}"</em>
      </p>
    </div>
  );
};

export default RankCard;