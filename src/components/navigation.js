import React from 'react';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  
  render() {
    
    let { pathname } = this.props.location;

    let navEl;

    const navGenerator = (pageName) =>  <div> <Link to="/"> Home </Link> <span className="separator"> > </span> {pageName} </div>

    switch(pathname) {
      case '/':
        navEl = <div> <Link to="/"> Home </Link> </div>;
        break;
      case '/hiragana':
        navEl = navGenerator('Select Hiragana');
        break;
      case '/katakana':
        navEl = navGenerator('Select Katakana');
        break;
      case '/practice':
        navEl = navGenerator('Practice');
        break;
      case '/options':
          navEl = navGenerator('Options');
          break;
      case '/results':
          navEl = navGenerator('Results');
          break;
      case '/history':
        navEl = navGenerator('History');
        break;
      default:
        navEl = <div> <Link to="/"> Home </Link> </div>;
        break;
    }


    return <nav className="kanary__navigation"> {navEl} </nav>
  }
}

export default withRouter(Navigation);