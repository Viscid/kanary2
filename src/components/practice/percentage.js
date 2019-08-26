import React from 'react';

export default React.memo(function Percentage(props) {
  const percent = Math.floor((props.index / props.length) * 100);
  return (
    <div className="practice__percentage">
      <div className="practice__progressBar">
        <div className="practice__progressBarInner" style={{width: percent + '%'}}></div>
      </div>
    </div>
  );
});