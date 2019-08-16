import React from 'react';

class KanaBar extends React.Component {
  constructor(props) {
    super(props);
    this.kanaBarRef = React.createRef();
    this.state = {
      offset: undefined,
      height: 0
    }
    this.updateWidth = this.updateWidth.bind(this);
  }

  updateWidth() {
    const offset =  this.kanaBarRef.current ? this.kanaBarRef.current.clientWidth / 2 : 0;
    this.setState({
      offset
    });
  }


  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div 
        className="practice__kanaBar"
        ref={this.kanaBarRef}>
        <div 
          className="practice__kanaContainer"
          style={{
            left: (this.state.offset - this.props.kanaBarOffset) - (this.props.currentKanaWidth / 2) + 'px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default KanaBar;