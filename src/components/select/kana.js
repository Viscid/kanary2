import React from 'react';

export default React.memo(function Kana(props) {
  const onClick = (e) => props.toggleKana(props.kana);

  return (
    <div
      className={"select__kanaButton" + (props.selected ? ' selected' : '')}
      onClick={onClick}>
        {props.kana.character} 
        <div className="select__kanaButtonRomaji">
          {props.kana.romaji[0]}
        </div>
    </div>
  );
});