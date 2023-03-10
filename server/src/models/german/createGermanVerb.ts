import { LanguageMap } from '@models/jsonTypes';
import { DataObj } from '@german/germanBuildJsonFromYml';
import { separableArray, SeperableGermanParticles } from '@german/germanConstants';
import { GermanSeparableVerb, GermanVerb } from './germanTypes';
import verbIsIrregular from './propertyTestFunctions/verbIsIrregular';
import createIrregularVerbFeatures from './translateYtoJFunctions/createIrregularVerbFeatures';

export const createVerb = (_infinitive: string, dataObj: DataObj): GermanVerb | undefined => {
  if (_infinitive.includes('|')) {
    return;
  }

  const translations: LanguageMap = {};
  translations.en = dataObj.translations.en;

  let newVerb: GermanVerb = {
    language: 'de',
    drop: dataObj['drop ich/es pr\u00e4sens endings'] || false,
    hilfsverb: dataObj.hilfsverb === 'sein' ? 'sein' : 'haben',
    infinitive: _infinitive,
    translations,
  };

  if (verbIsIrregular(dataObj)) {
    newVerb = createIrregularVerbFeatures({ newVerb, dataObj });
  }

  return newVerb;
};

export const createSeparableVerb = (
  _infinitive: string,
  dataObj: DataObj,
): [key: string, data: GermanSeparableVerb] | undefined => {
  if (!_infinitive.includes('|')) {
    return;
  }

  const condidateParticle = _infinitive.slice(0, _infinitive.indexOf('|'));
  if (separableArray.includes(condidateParticle)) {
    const particle = condidateParticle as SeperableGermanParticles;
    const translations: LanguageMap = {};
    translations.en = dataObj.translations.en;

    return [
      _infinitive.replace('|', ''),
      {
        language: 'de',
        hilfsverb: dataObj.hilfsverb === 'sein' ? 'sein' : 'haben',
        base: _infinitive.slice(_infinitive.indexOf('|') + 1),
        translations,
        particle,
      },
    ];
  }
};
