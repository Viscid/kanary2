import React from 'react';

export default React.memo(function kanaSet(props) {
  const kanaSet = props.children.map((child) => child.props.kana);
  const onClick = () => {
    props.toggleKanaSet(kanaSet);
  }

  return (
    <div className="select__kanaSet">
      <div className="select__headerContainer">
        <h4 className="select__kanaSetHeader"> {props.name} </h4>
        <div 
          className="select__groupSelectButton"
          onClick={onClick}>
          Select Set
        </div>
      </div>
      <div className="select__kanaContainer">
        {props.children}
      </div>
    </div>
  )
});