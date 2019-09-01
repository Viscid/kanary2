import React from 'react';
import { connect } from 'react-redux';
import { setDrillLength, setStrict } from 'store/actions';
import './options.scss';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.changeDrillLength = this.changeDrillLength.bind(this);
    this.changeStrictness = this.changeStrictness.bind(this);
  }

  changeDrillLength(e) {
    this.props.setDrillLength(e.target.value)
  }

  changeStrictness() {
    this.props.setStrict(!this.props.options.strict);
  }

  render() {
    return (
      <div className="options__container"> 
      
        <div className="menu">
          <h3> Options </h3>


          <div className="menuContent">

          <div className="options__option">
            <label> Drill Length </label>
            <input 
              type="number"
              maxLength="4"
              min="1"
              size="4"
              value={this.props.options.drillLength}
              onChange={this.changeDrillLength} />
          </div>

          <div className="options__option">
            <label> Strict </label>
            <input 
              type="checkbox"
              checked={this.props.options.strict}
              onChange={this.changeStrictness} />
          </div>          

          </div>
          
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { options } = state;
  return {
    options
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDrillLength: (length) => dispatch(setDrillLength(length)),
    setStrict: (strict) => dispatch(setStrict(strict))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);