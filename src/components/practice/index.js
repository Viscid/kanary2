import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.scss';

import Kana from './kana';
import KanaBar from './kanaBar';
import RomajiInput from './romajiInput';
import Timer from './timer';
import Percentage from './percentage';
import kanaGenerator from './kanaGenerator'

import { addItemToHistory } from 'store/actions';

class Practice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentKana: 0,
      startTime: 0,
      timeElapsed: 0,
      inputValue: '',
      kanaBarOffset: 0,
      inputDisabled: false,
      right: [],
      wrong: [],
      widths: [],
      done: false
    }

    this.timer = undefined;
    this.kanaRefs = this.props.orderedKana.map(() => React.createRef());
    this.inputRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  disableInput(time) {
    this.setState({ inputDisabled: true });
    setTimeout(() => this.setState({ inputDisabled: false }), time);
  }

  startTimer(interval) {
    this.setState({ startTime: Date.now() });

    this.timer = setInterval(
      () => this.setState({ timeElapsed: Date.now() - this.state.startTime }),
      interval);
  }

  stopPractice() {
    this.stopTimer();
    this.setState({ inputValue: '' });
    setTimeout(() => this.setState({ done: true }), 1000);
  }

  stopTimer() { if (this.timer) clearInterval(this.timer); }

  checkAnswer(answer) {
    const currentKana = this.props.orderedKana[this.state.currentKana];

    if (this.props.options.strict) {
      const charIndex = answer.length - 1;
      return currentKana.romaji.some(
        (romaji) => romaji.charAt(charIndex) === answer.charAt(charIndex)
      );
    } else {
      let maxAnswerLength = 1;
      currentKana.romaji.forEach((romaji) => maxAnswerLength = maxAnswerLength < romaji.length ? romaji.length : maxAnswerLength);
      return answer.length <= maxAnswerLength;
    }
  }

  updateKanaBarOffset(nextKanaIndex) {
    const widths = this.state.widths.slice(0, nextKanaIndex);
    this.setState({
      kanaBarOffset: widths.length ? widths.reduce((pre, cur) => pre + cur) : 0
    });
  }


  nextKana(right) {
    const nextKanaIndex = this.state.currentKana + 1;
    const lastKanaIndex = this.props.orderedKana.length - 1;

    this.setState({
      currentKana: nextKanaIndex,
      inputValue: ''
    });

    if (right) this.setState({ right: [...this.state.right, this.state.currentKana] });
    else {
      this.setState({ wrong: [...this.state.wrong, this.state.currentKana] });
      this.disableInput(500);
    }

    if (nextKanaIndex <= lastKanaIndex) {
      this.updateKanaBarOffset(nextKanaIndex);

    } else this.stopPractice();
  }

  onChange(e) {
    if (this.state.inputDisabled) return;
    if (!this.timer) this.startTimer(100);

    const value = e.target.value;
    const currentKana = this.props.orderedKana[this.state.currentKana];

    if (currentKana.romaji.includes(value)) this.nextKana(true);
    else if (!this.checkAnswer(value)) this.nextKana(false);
    else this.setState({ inputValue: e.target.value });
  }

  componentDidMount() {
    this.setState({
      widths: this.kanaRefs.map((ref) => ref.current ? ref.current.r.current.scrollWidth : null)
    });
    this.updateKanaBarOffset();
  }

  componentDidUpdate() {
    if (this.state.done) this.props.addItemToHistory(
      this.state.timeElapsed,
      this.props.orderedKana,
      this.state.right,
      this.state.wrong,
      Date.now());
  }

  focusInput() {
    this.inputRef.current.inputRef.current.focus();
  }

  render() {
    return !this.state.done ?
      <div
        onMouseDown={this.focusInput}
        className="practice__container">
        <KanaBar
          currentKanaWidth={this.state.widths[this.state.currentKana]}
          kanaBarOffset={this.state.kanaBarOffset}>
          {this.props.orderedKana.map((kana, index) => <Kana
            index={index}
            key={index}
            kana={kana}
            ref={this.kanaRefs[index]}
            right={this.state.right.includes(index)}
            wrong={this.state.wrong.includes(index)}
            active={this.state.currentKana === index} />)}
        </KanaBar>
        <RomajiInput
          ref={this.inputRef}
          value={this.state.inputValue}
          onChange={this.onChange}
          disabled={this.inputDisabled} />
        <div
          className="practice__infoContainer">
          <Timer
            time={this.state.timeElapsed} />
          <Percentage
            length={this.props.orderedKana.length}
            index={this.state.currentKana} />
        </div>
      </div> : <Redirect to="/results" />

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToHistory: (length, kana, right, wrong, date) => dispatch(addItemToHistory(length, kana, right, wrong, date))
  };
};

const mapStateToProps = (state) => {
  const { practice, options } = state;
  return {
    practice,
    options,
    orderedKana: kanaGenerator(state)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Practice);