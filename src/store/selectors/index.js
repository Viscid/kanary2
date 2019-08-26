import { createSelector } from 'reselect';
import kanaData from 'data/kana.json';

const selectedKana = state => state.selection;
const options = state => state.options;

export const getOrderedKana = createSelector(
  [selectedKana, options],
  (selectedKana, options) => {
    const kana = selectedKana.map( (kanaId) => kanaData.find((kana) => kana.id === kanaId) )
    .filter((kana) => kana.syllabary === options.mode);

    let returnedKana = [];

    for (var i = 0; i < options.drillLength; i++) {
      returnedKana.push(kana[Math.floor(Math.random() * kana.length)]);
    }

    return returnedKana;

    }
);
  