import { createSelector } from 'reselect';
import kanaData from 'data/kana.json';
import { shuffle } from 'underscore';

const selectedKana = state => state.selection;
const mode = state => state.options.mode;

export const getOrderedKana = createSelector(
  [selectedKana, mode],
  (selectedKana, mode) => shuffle(
    selectedKana.map(
      (kanaId) => kanaData.find((kana) => kana.id === kanaId)
    )
  ).filter((kana) => kana.syllabary === mode)
);
  