import React from 'react';

import './select.scss';

import Tab from '../tabs/tab';
import Tabs from '../tabs/tabs';
import KanaGrouping from './kanaGrouping';

export default class Selection extends React.Component {
  render() {
    return (
      <div className="select__contentContainer">
        <div className="select__kanaGroupings">
          <Tabs
            selection={this.props.selection}>
            <Tab
              label="Reduced Gojūon">
              <KanaGrouping
                name="gojuon"
                kanaSets={[
                  ['あ', 'い', 'う', 'え', 'お'],
                  ['か', 'き', 'く', 'け', 'こ'],
                  ['さ', 'し', 'す', 'せ', 'そ'],
                  ['た', 'ち', 'つ', 'て', 'と'],
                  ['な', 'に', 'ぬ', 'ね', 'の'],
                  ['は', 'ひ', 'ふ', 'へ', 'ほ'],
                  ['ま', 'み', 'む', 'め', 'も'],
                  ['や', 'ゆ', 'よ'],
                  ['ら', 'り', 'る', 'れ', 'ろ'],
                  ['わ', 'を', 'ん']
                  ]} />
            </Tab>
            <Tab
              label="Dakuon &amp; Handakuon">
              <KanaGrouping
                name="dakuon"
                kanaSets={[
                  ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
                  ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
                  ['だ', 'ぢ', 'づ', 'で', 'ど'],
                  ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
                  ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ']
                  ]} />
            </Tab>
            <Tab
              label="Yōon">
              <KanaGrouping
                name="yoon"
                kanaSets={[
                  ['きゃ', 'きゅ', 'きょ'],
                  ['しゃ', 'しゅ', 'しょ'],
                  ['ちゃ', 'ちゅ', 'ちょ'],
                  ['にゃ', 'にゅ', 'にょ'],
                  ['ひゃ', 'ひゅ', 'ひょ'],
                  ['みゃ', 'みゅ', 'みょ'],
                  ['りゃ', 'りゅ', 'りょ'],
                  ['ぎゃ', 'ぎゅ', 'ぎょ'],
                  ['じゃ', 'じゅ', 'じょ'],
                  ['ぢゃ', 'ぢゅ', 'ぢょ'],
                  ['びゃ', 'びゅ', 'びょ'],
                  ['ぴゃ', 'ぴゅ', 'ぴょ'],
                  ]} />
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

