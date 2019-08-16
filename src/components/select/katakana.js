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
                  ['ア', 'イ', 'ウ', 'エ', 'オ'],
                  ['カ', 'キ', 'ク', 'ケ', 'コ'],
                  ['サ', 'シ', 'ス', 'セ', 'ソ'],
                  ['タ', 'チ', 'ツ', 'テ', 'ト'],
                  ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
                  ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
                  ['マ', 'ミ', 'ム', 'メ', 'モ'],
                  ['ヤ', 'ユ', 'ヨ'],
                  ['ラ', 'リ', 'ル', 'レ', 'ロ'],
                  ['ワ', 'ヲ', 'ン']
                  ]} />
            </Tab>
            <Tab
              label="Dakuon &amp; Handakuon">
              <KanaGrouping
                name="dakuon"
                kanaSets={[
                  ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'],
                  ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'],
                  ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'],
                  ['バ', 'ビ', 'ブ', 'ベ', 'ボ'],
                  ['パ', 'ピ', 'プ', 'ペ', 'ポ']
                  ]} />
            </Tab>
            <Tab
              label="Yōon">
              <KanaGrouping
                name="yoon"
                kanaSets={[
                  ['キャ', 'キュ', 'キョ'],
                  ['シャ', 'シュ', 'ショ'],
                  ['チャ', 'チュ', 'チョ'],
                  ['ニャ', 'ニュ', 'ニョ'],
                  ['ヒャ', 'ヒュ', 'ヒョ'],
                  ['ミャ', 'ミュ', 'ミョ'],
                  ['リャ', 'リュ', 'リョ'],
                  ['ギャ', 'ギュ', 'ギョ'],
                  ['ジャ', 'ジュ', 'ジョ'],
                  ['ヂャ', 'ヂュ', 'ヂョ'],
                  ['ビャ', 'ビュ', 'ビョ'],
                  ['ピャ', 'ピュ', 'ピョ'],
                  ]} />
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

