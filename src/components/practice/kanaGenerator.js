import kanaData from 'data/kana.json';

export default function kanaGenerator(state) {
  const { selection, options } = state;

  const kana = selection.map( (kanaId) => kanaData.find((kana) => kana.id === kanaId) )
  .filter((kana) => kana.syllabary === options.mode);

  let returnedKana = [];

  for (var i = 0; i < options.drillLength; i++) {
    returnedKana.push(kana[Math.floor(Math.random() * kana.length)]);
  }

  return returnedKana;

}