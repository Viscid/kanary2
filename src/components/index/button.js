import React from 'react';
import { Link } from 'react-router-dom';

export default function MainButton(props) {
  return props.active ? (
      <Link 
        className="main__button"
        to={props.to}> {props.text} </Link> 
  ) : (
    <span
      className="main__button disabled"
      > {props.text}
    </span>
  );
}