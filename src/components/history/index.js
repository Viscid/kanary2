import React from 'react';
import dateFormat from 'dateformat';

import { connect } from 'react-redux';
import './history.scss';

import { clearHistory } from 'store/actions';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.clearHandler = this.clearHandler.bind(this);
  }

  clearHandler() {
    this.props.clearHistory();
  }



  render() {

    const clearButton = (<button
      onClick={this.clearHandler}
      className="history__clearButton"> Clear 
    </button>);
  
    const emptyMessage = (<div className="history__emptyMessage">
      The history is empty. <br /> Horribly, horribly empty. 
    </div>)

    return (
      <div className="menu">
        <h2 className="history__header"> History </h2>
        <div className="menuContent">
          {this.props.history.length ? clearButton : emptyMessage}
          <div className="history__dataContainer">
            {this.props.history.map((historyItem) => {

              const numItems = historyItem.kana.length;
              const numRight = historyItem.right.length;
              const numWrong = historyItem.wrong.length;
              const time = historyItem.time;
              const percent = Math.floor(((numRight / numItems) * 100) * 100) / 100;
              const kps = (Math.floor(((time / numRight) / 1000) * 100)) / 100;;
              const date = new Date(historyItem.date);
              const seconds = Math.floor(historyItem.time / 1000) % 60;
              const minutes = Math.floor(historyItem.time / 60000) % 60;
              
              return (
                <div className="history__dataItem"
                  key={historyItem.date}>
                  <div className="history__dataItemDate"> {dateFormat(date, "mmm dS @ h:MM:ss TT")} </div>
                  <div className="history__dataItemsContainer">
                    <div className="history__dataItemTotal"> <label> Items: </label> {numItems} </div>
                    <div className="history__dataItemRight"> <label> Right: </label> {numRight}  </div>
                    <div className="history__dataItemWrong"> <label> Wrong: </label> {numWrong} </div>
                  </div>
                  <div className="history__dataItemsContainer">
                    <div className="history__dataItemPercent"> {percent}<label>%</label></div>
                    <div className="history__dataItemKps"> <label> kps: </label> {kps} </div>
                    <div className="history__dataItemTime"> <label> Time: </label> {minutes}:{seconds.toString().padStart(2, 0)} </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { history } = state;

  return {
    history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearHistory: () => dispatch(clearHistory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);