import { DataObj } from '../germanBuildJsonFromYml';

const standardIrregularProperties = ['partizip', 'strong', 'stems', 'irregular'];

export default function isIrregular(
  dataObj: DataObj,
  irregularProperties = standardIrregularProperties,
) {
  const properties = Object.keys(dataObj);
  // eslint-disable-next-line no-console
  console.log('is irregular', properties);

  for (let i = 0; i < properties.length; i += 1) {
    const propertyToTest = properties[i];
    if (irregularProperties.includes(propertyToTest)) {
      return true;
    }
  }

  return false;
}

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/translateYtoJFunctions/createIrregularVerbFeatures.spec.ts -t "verbIsIrregular correctly determines the state of the verb"
