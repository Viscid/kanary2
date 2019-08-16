import React from 'react';

export default function TabButton(props) {
  return (
    <div 
      className={"tabsButton" + (props.active ? ' active' : '')}
      onClick={() => props.onClick(props.tab)}>
      {props.children}
    </div>
  )
}