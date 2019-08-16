import React from 'react';
import 'Kanary2.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from 'components/index';
import Navigation from 'components/navigation';
import SelectHiragana from 'components/select/hiragana';
import SelectKatakana from 'components/select/katakana';
import Practice from 'components/practice';

function Kanary2(props) {
  return (
    <Router>
      <div className="kanary2">
        <Navigation />
        <div className="kanary__routerContent">
          <Route path="/" exact component={Index} />
          <Route path="/hiragana" exact component={SelectHiragana} />
          <Route path="/katakana" exact component={SelectKatakana} />
          <Route path="/practice" exact component={Practice} />
        </div>
      </div>
    </Router>
  );
}

export default Kanary2;
