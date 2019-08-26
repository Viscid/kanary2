import kanaData from 'data/kana.json';
import { shuffle } from 'underscore';

export const TOGGLE_KANA = 'TOGGLE_KANA';
export const TOGGLE_KANA_SET = 'TOGGLE_KANA_SET';
export const SET_MODE = 'SET_MODE';
export const INITIALIZE_PRACTICE = 'INITIALIZE_PRACTICE';
export const SET_DRILL_LENGTH = 'SET_DRILL_LENGTH';
export const ADD_ITEM_TO_HISTORY = 'ADD_ITEM_TO_HISTORY';

export function toggleKana(kana) {
  return { 
    type: TOGGLE_KANA,
    kana
  }
}

export function initializeKana(selectedKana, options) {
  
  const initializedKana = shuffle(selectedKana
  .map((id) => kanaData.find((kana) => kana.id === id))
  .filter((kana) => kana.syllabary === options.mode));

  return {
    type: INITIALIZE_PRACTICE,
    initializedKana
  }
}

export function toggleKanaSet(kanaSet) {
  return {
    type: TOGGLE_KANA_SET,
    kanaSet
  }
}

export function setMode(mode) {
  return {
    type: SET_MODE,
    mode
  }
}

export function setDrillLength(length) {
  return {
    type: SET_DRILL_LENGTH,
    length
  }
}

export function addItemToHistory(time, kana, right, wrong, date) {
  return {
    type: ADD_ITEM_TO_HISTORY,
    item: {
      time,
      kana,
      right,
      wrong,
      date
    }
  }
}