import React from 'react';

export default function modeSelector(props) {

  function setMode(mode) {
    props.setMode(mode);
  }

  return (
    <div className="modeSelectorContainer">
      <h4 className="modeSelectorLabel"> Mode: </h4>
      <div className="modeSelector">
        <div
          className={"modeOption" + (props.activeMode === 'hiragana' ? ' active' : '')}
          onClick={() => setMode('hiragana')}> Hiragana </div>
        <div
          className={"modeOption" + (props.activeMode === 'katakana' ? ' active' : '')}
          onClick={() => setMode('katakana')}> Katakana </div>
      </div>
    </div>
  )
}