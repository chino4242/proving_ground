interface RankCardProps {
    exerciseName: string;
    resultValue: string;
    rankName: string;
    rankDescription: string;
}

const RankCard: React.FC<RankCardProps> = ({
    exerciseName,
    resultValue,
    rankName,
    rankDescription
}) => {

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    borderBottom: '2px solid #333',
    paddingBottom: '8px',
    marginBottom: '8px',
    fontWeight: 'bold' as const,
    fontSize: '1.2rem'
  };

  const rankStyle = {
    color: '#d35400', // A nice burnt orange for the rank
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    margin: '10px 0'
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{exerciseName}</div>
      
      <div>
        <strong>My Result: </strong> {resultValue}
      </div>

      {/* The Themed Part */}
      <div style={rankStyle}>{rankName}</div>
      
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        <em>"{rankDescription}"</em>
      </p>
    </div>
  );
};

export default RankCard;