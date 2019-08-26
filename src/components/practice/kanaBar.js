import React from 'react';

class KanaBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.kanaBarRef = React.createRef();
    this.state = {
      viewportWidth: undefined,
    }
    this.updateViewportWidth = this.updateViewportWidth.bind(this);
  }


  updateViewportWidth() {
    const viewportWidth =  this.kanaBarRef.current ? this.kanaBarRef.current.clientWidth / 2 : 0;
    this.setState({
      viewportWidth
    });
  }


  componentDidMount() {
    window.addEventListener("resize", this.updateViewportWidth);
    this.updateViewportWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewportWidth);
  }

  render() {
    return (
      <div 
        className="practice__kanaBar"
        ref={this.kanaBarRef}>
        <div 
          className="practice__kanaContainer"
          style={{
            left: (this.state.viewportWidth - this.props.kanaBarOffset) - (this.props.currentKanaWidth / 2) + 'px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default KanaBar;