/*
  This regex assumes the standard verb ending is
  present (eln).
*/
export const stemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)(?<ending>e*[lrn]*\b)/;

/*
  This regex is looking only for patterns of
  c* v* c*
*/
export const syllableRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)/;

export const regularStemRegex =
  /^(?<prepend>.*?)(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*$)/;
