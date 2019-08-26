import React from 'react';

import { connect } from 'react-redux';

import { setMode } from 'store/actions';

import { Link } from 'react-router-dom';

import Button from './button';
import ModeSelector from './modeSelector';

import kana from 'data/kana.json';

import './index.scss';

class Index extends React.Component {

  selectedKanaCount() {
    const count = kana.filter( (kana) => 
    (this.props.selection.includes(kana.id) && (kana.syllabary === this.props.options.mode))
  ).length;
    return count;
  }

  render() {
    return (
      <div className="index__container">
        <div className="menu">
          <h1 className="header"> Kanary </h1>
          <div className="menuContent">
            <ModeSelector 
              setMode={this.props.setMode}
              activeMode={this.props.options.mode}
            />

            <Link
              className="optionsButton"
              to={'/' + this.props.options.mode}> Edit Kana Set  
            </Link>

            <Link
              className="optionsButton"
              to="/options"> Options 
            </Link>

            <div className="menuText">
              <Link to={'/' + this.props.options.mode}></Link>
              <span style={{fontWeight: 'bold'}}> {this.selectedKanaCount()} </span> kana selected. <br />
            </div>

            <div className="buttonContainer">
              <Button
                active={!!this.selectedKanaCount()}
                text="Begin"
                to="/practice" />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  const { options, selection } = state;
  return {
    options,
    selection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMode: (mode) => dispatch(setMode(mode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);