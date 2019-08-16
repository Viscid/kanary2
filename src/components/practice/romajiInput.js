import React from 'react';

class RomajiInput extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.focus = this.focus.bind(this);
  }

  focus() {
    this.inputRef.current.focus();
  }

  componentDidMount() {
    this.focus();
    window.addEventListener("focus", this.focus);
  }

  componentWillUnmount() {
    window.removeEventListener("focus", this.focus);
  }

  render() {
    return (
      <div className="practice__romajiInput">
        <input
          onChange={this.props.onChange}
          ref={this.inputRef}
          value={this.props.value}
          type="text"
          size="3" />
      </div>
    )
  }
};

export default RomajiInput;