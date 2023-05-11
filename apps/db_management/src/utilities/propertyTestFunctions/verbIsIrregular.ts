import { LanguageVerbBase } from 'global-types';

export default function verbIsIrregular(
  dataObj: LanguageVerbBase | (LanguageVerbBase & Record<string, unknown>),
  irregularProperties: string[],
) {
  const properties = Object.keys(dataObj);

  for (let i = 0; i < properties.length; i += 1) {
    const propertyToTest = properties[i];
    if (irregularProperties.includes(propertyToTest)) {
      return true;
    }
  }

  return false;
}
