import React from 'react';

export default React.memo(function Timer(props) {
  const seconds = Math.floor(props.time / 1000) % 60;
  const minutes = Math.floor(props.time / 60000) % 60;
  return (
    <div className="practice__timer">
      {`${minutes}:${seconds.toString().padStart(2, 0)}`}
    </div>
  );
});