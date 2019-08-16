import React from 'react';

import { connect } from 'react-redux';

import './index.scss';

import Kana from './kana';
import KanaBar from './kanaBar';
import RomajiInput from './romajiInput';

import { getOrderedKana } from 'store/selectors/index';

class Practice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentKana: 0,
      inputValue: '',
      correct: [],
      wrong: [],
      widths: []
    }
    
    this.kanaRefs = this.props.orderedKana.map(() => React.createRef());
    this.kanaBar = React.createRef();
    this.inputRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  checkAnswer(answer) {
    const currentKana = this.props.orderedKana[this.state.currentKana];
    const charIndex = answer.length - 1;

    return currentKana.romaji.some(
      (romaji) => romaji.charAt(charIndex) === answer.charAt(charIndex)
    );
  }

  onChange(e) {
    const value = e.target.value;
    const currentKana = this.props.orderedKana[this.state.currentKana];

    if (currentKana.romaji.includes(value)) {
      setTimeout(      this.setState({
        currentKana: this.state.currentKana + 1,
        inputValue: '',
        correct: [...this.state.correct, this.state.currentKana]
      }), 200);

    } else if (!this.checkAnswer(value)) { 
      this.setState({
        currentKana: this.state.currentKana + 1,
        inputValue: '',
        wrong: [...this.state.wrong, this.state.currentKana]
      })
    } else {
      this.setState({
        inputValue: e.target.value
      });
    }
  }

  componentDidMount() {
    this.setState({
      widths: this.kanaRefs.map((ref) => ref.current.r.current.scrollWidth)
    });
  }

  getOffset() {
    if (this.kanaBar.current) { console.log(React.Children.count(this.kanaBar.current.props.children)); }
    const widths = this.state.widths.slice(0, this.state.currentKana);
    return widths.length ? widths.reduce((pre, cur) => pre + cur) : 0;
  }

  focusInput() {
    this.inputRef.current.inputRef.current.focus();
  }

  render() {
    return (
      <div
        onMouseDown={this.focusInput}
        className="practice__container">
        <KanaBar
          currentKana={this.state.currentKana}
          currentKanaWidth={this.state.widths[this.state.currentKana]}
          kanaBarOffset={this.getOffset()}
          ref={this.kanaBar}>
          {this.props.orderedKana.map((kana, index) => <Kana
            index={index}
            key={kana.id}
            kana={kana}
            ref={this.kanaRefs[index]}
            correct={this.state.correct.includes(index)}
            wrong={this.state.wrong.includes(index)}
            active={this.state.currentKana === index} />)}
        </KanaBar>
        <RomajiInput
          ref={this.inputRef}
          value={this.state.inputValue}
          onChange={this.onChange} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const mapStateToProps = (state) => {
  const { practice } = state;
  return {
    practice,
    orderedKana: getOrderedKana(state)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Practice);