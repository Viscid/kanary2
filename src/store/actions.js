import kanaData from 'data/kana.json';
import { shuffle } from 'underscore';

export const TOGGLE_KANA = 'TOGGLE_KANA';
export const TOGGLE_KANA_SET = 'TOGGLE_KANA_SET';
export const SET_MODE = 'SET_MODE';
export const INITIALIZE_PRACTICE = 'INITIALIZE_PRACTICE';

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