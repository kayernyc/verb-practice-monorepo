import { LanguageVerbBase } from 'global-types';
import { GermanVerb, GermanVerbTypeGuard } from 'german-types';

const germanStemsDictionary: Record<string, string> = {
  k2präsens: 'k2präsens',
  konjunktiv: 'konjunktiv',
  partizip: 'partizip',
  ['präsens du/es']: 'duEs',
  ['präsens singular']: 'präsensSingular',
  präteritum: 'präteritum',
};

export const processDeRecord = (record: LanguageVerbBase) => {
  // confirm record is German
  if (!GermanVerbTypeGuard(record)) {
    throw new Error (`Error: ${record.infinitive} is not a valid German Verb`)
  }

  // Until processing for separable verbs is ready
  if (record.infinitive.includes('|')) {
    return;
  }

  console.log('here')
}