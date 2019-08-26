import React from 'react';

export default class Kana extends React.PureComponent {
  constructor(props) {
    super(props);
    this.r = React.createRef();
  }

  is = (prop) => this.props[prop] ? ' ' + prop : '';

  render() {
    return (
      <div 
        ref={this.r}
        className={"practice__singleKana " + this.is('active') + this.is('right') + this.is('wrong')}>
        <div> 
          {this.props.kana.character}
          {this.props.wrong ? <div className="practice__singleKanaAnswer"> {this.props.kana.romaji[0]} </div> : null}  
        </div>
      </div>
    );
    
  } 
}