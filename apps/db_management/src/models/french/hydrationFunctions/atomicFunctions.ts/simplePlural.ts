const circomflexMap = {
  i: 'î',
  u: 'û',
}

export const simplePlural = (stem: string, ending: string): string => {
  const lastChar = stem.slice(-1);
  const newStem = stem.slice(0, -1);
  const newVowel = circomflexMap[lastChar] || lastChar;
  return `${newStem}${newVowel}${ending}`;
}