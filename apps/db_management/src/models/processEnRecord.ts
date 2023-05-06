import { LanguageVerbBase } from 'global-types';
import { isEnglishVerb } from 'english-types';

export const processEnRecord = (record: LanguageVerbBase) => {
  // confirm record is German
  if (!isEnglishVerb(record)) {
    throw new Error (`Error: ${record.infinitive} is not a valid German Verb`)
  }

  // Until processing for separable verbs is ready
  if (record.infinitive.includes('|')) {
    return;
  }

  // Hydrate

  return record;
}