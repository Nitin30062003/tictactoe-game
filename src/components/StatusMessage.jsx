const StatusMessage = ({ winner, isNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={isNext ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> are Tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is{' '}
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
