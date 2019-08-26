import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './results.scss';

class Results extends React.Component {
  constructor(props) {
    super(props);
    const results = props.history.length ? 
      props.history[props.history.length - 1]
      : { right: [], wrong: [], date: 0, time: 2345, kana: [] };

    this.state = {
      time: results.time,
      kana: results.kana,
      right: results.right,
      wrong: results.wrong,
      percentage: (results.right.length / results.kana.length) * 100,
      again: false
    }

    this.onKeyPress = this.onKeyPress.bind(this);
  }



  kanaByIndex(indices) {
    return indices
    .map((index) => this.state.kana[index])
    .map((kana) => <span> {kana.character} </span>);
  }


  time() {
    const time = this.state.time;
    const ms = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;

    const msEl = <span className="ms">{ms.toString().slice(0, 2)}</span>
    const secEl = <span className="seconds">{seconds.toString().padStart(2, 0)}</span>
    const minEl = <span className="minutes">{minutes.toString().padStart(2, 0)}:</span>

  return (<div> {minEl}{secEl}{msEl} </div>);
  }

  percentage() {
    const percent = Math.round(
      ((this.state.right.length / this.state.kana.length) * 100) * 100) / 100;
    return isNaN(percent) ? 100 : percent;
  }

  onKeyPress(e) {
    if (e.keyCode === 13) {
      this.setState({ again: true });

    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress)
  }

  render() {
    return !this.state.again ? (
      <div className="menu results">
        <h2> Results </h2>
        <div className="results__timeContainer">
          <div className="results__kps"> {this.state.right.length} correct kana in </div> 
          <div className="results__time"> {this.time()} </div>
          <div className="results__kps"> ({Math.round((this.state.right.length / (this.state.time / 1000)) * 100) / 100} kps) </div>
        </div>
        <div className="results__numbersContainer">
          <div className="results__number">
            <div className="rightNumber"> {this.kanaByIndex(this.state.right).length} </div>
            <div className="results__numberText"> Right </div>
          </div>
          <div className="results__number">
            <div className="wrongNumber"> {this.kanaByIndex(this.state.wrong).length} </div>
            <div className="results__numberText"> Wrong </div>
          </div>
        </div>
    
        <div className="results__percentage">
          ({this.percentage()}%)
        </div>
      
        <Link 
          className="results__againLink"
          to="/practice"> Retry </Link> 
      </div>
    ) : <Redirect to="/practice" />;
  };

}

const mapStateToProps = (state) => {
  const { history } = state;
  return {
    history
  }
}

export default connect(mapStateToProps, null)(Results);