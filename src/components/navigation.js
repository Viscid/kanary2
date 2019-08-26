import React from 'react';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  
  render() {
    
    let { pathname } = this.props.location;

    let navEl;

    switch(pathname) {
      case '/':
        navEl = <div> <Link to="/"> Home </Link> </div>
        break;
      case '/hiragana':
        navEl = <div> <Link to="/"> Home </Link> <span className="separator"> > </span> Select Hiragana </div>
        break;
      case '/katakana':
        navEl = <div> <Link to="/"> Home </Link> <span className="separator"> > </span> Select Katakana </div>
        break;
      case '/practice':
        navEl = <div> <Link to="/"> Home </Link> <span className="separator"> > </span> Practice </div>
        break;
      case '/options':
          navEl = <div> <Link to="/"> Home </Link> <span className="separator"> > </span> Options </div>
          break;
      case '/results':
          navEl = <div> <Link to="/"> Home </Link> <span className="separator"> > </span> Results </div>
          break;
      default:
        navEl = (
          <div>
            <Link to="/"> Home </Link>
          </div>
        );
        break;
    }


    return <nav className="kanary__navigation"> {navEl} </nav>
  }
}

export default withRouter(Navigation);