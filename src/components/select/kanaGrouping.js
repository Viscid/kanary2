import React from 'react';
import { connect } from 'react-redux';
import KanaSet from './kanaSet';
import Kana from './kana';

import { toggleKana, toggleKanaSet } from '../../store/actions';

import kanaData from 'data/kana.json';

const defaultKana = {
  id: 1000,
  character: '?',
  romaji: '?',
  type: 'natakana',
  group: 'tsudokana'
}

class kanaGrouping extends React.Component {
  toggleKanaGroup(groupName) {
    const kanaSet = kanaData.filter((kana) => kana.group === groupName);
    this.props.toggleKanaSet(kanaSet);
  }

  getKanaFromCharacters(items) {
    return items.map(
      (item) => {
        const kana = kanaData.find((kana) => kana.character === item);
        return (
          <Kana
            selected={kana ? this.props.selection.includes(kana.id) : false}
            toggleKana={this.props.toggleKana}
            kana={kana ? kana : defaultKana}
            key={kana ? kana.id : defaultKana.id}
          />
        );
      });
  }

  render() {
    return (
      <div className="select__groupingContent">
        <div
          className="select__groupingSelectButton"
          onClick={() => this.toggleKanaGroup(this.props.name)}>Select Entire Group</div>
        <div className="select__setsContainer">
          {this.props.kanaSets.map((kanaSet, index) =>
            <KanaSet
              key={index}
              name={kanaSet[0] + ' → ' + kanaSet[kanaSet.length - 1]}
              toggleKanaSet={this.props.toggleKanaSet}>
              {this.getKanaFromCharacters(kanaSet)}
            </KanaSet>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selection } = state;
  return {
    selection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleKana: (kana) => dispatch(toggleKana(kana)),
    toggleKanaSet: (kanaSet) => dispatch(toggleKanaSet(kanaSet)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(kanaGrouping);