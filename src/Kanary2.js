import React from 'react';
import 'Kanary2.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from 'components/index';
import Navigation from 'components/navigation';
import SelectHiragana from 'components/select/hiragana';
import SelectKatakana from 'components/select/katakana';
import Practice from 'components/practice';
import Options from 'components/options';
import Results from 'components/results';
import History from 'components/history';

function Kanary2(props) {
  return (
    <Router>
      <div className="kanary2">
        <Navigation />
        <div className="kanary__routerContent">
          <Route path="/" exact component={Index} />
          <Route path="/hiragana" component={SelectHiragana} />
          <Route path="/katakana" component={SelectKatakana} />
          <Route path="/practice" component={Practice} />
          <Route path="/options" component={Options} />
          <Route path="/results" component={Results} />
          <Route path="/history" component={History} />
        </div>
      </div>
    </Router>
  );
}

export default Kanary2;
