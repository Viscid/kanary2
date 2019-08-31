import React from 'react';
import dateFormat from 'dateformat';

import { connect } from 'react-redux';
import './history.scss';

class History extends React.Component {
  render() {
    return (
      <div className="menu">
        <h2 className="history__header"> History </h2>
        <div className="menuContent">
          <div className="history__dataContainer">
            {this.props.history.map((historyItem) => {

              const date = new Date(historyItem.date);
              const seconds = Math.floor(historyItem.time / 1000) % 60;
              const minutes = Math.floor(historyItem.time / 60000) % 60;

              return (
                <div className="history__dataItem"
                  key={historyItem.date}>
                  <div className="history__dataItemDate"> {dateFormat(date, "mmm dS @ h:MM:ss TT")} </div>
                  <div className="history__dataItemsContainer">
                    <div className="history__dataItemTotal"> Items: {historyItem.kana.length} </div>
                    <div className="history__dataItemRight"> Right: {historyItem.right.length}  </div>
                    <div className="history__dataItemWrong"> Wrong: {historyItem.wrong.length} </div>
                    <div className="history__dataItemTime">  </div>
                  </div>
                  <div className="history__dataItemsContainer">
                    <div className="history__dataItemTotal"> Percent: {historyItem.kana.length} </div>
                    <div className="history__dataItemRight"> Score: {historyItem.right.length} / {historyItem.wrong.length} </div>
                    <div className="history__dataItemWrong"> Time: {minutes}:{seconds.toString().padStart(2, 0)} </div>
                    <div className="history__dataItemTime">  </div>
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

export default connect(mapStateToProps, null)(History);