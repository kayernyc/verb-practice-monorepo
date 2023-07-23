const reEndingsSimple = (stem: string) => {
  const lastTwoChar = stem.slice(-2);
  let participStem = stem;
  let simpleStem = stem;
  switch (lastTwoChar) {
    case 'ui':
      participStem = `${stem}t`;
      simpleStem = `${stem + 's'}i`;
      break;

    case 'fi':
    case 'di':
      simpleStem = `${stem}`;
      break;

    case 'li':
      simpleStem = `${stem.slice(0, -1)}u`;
      break;
  }
}