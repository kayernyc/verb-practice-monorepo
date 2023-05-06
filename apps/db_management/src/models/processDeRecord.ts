import { LanguageVerbBase } from 'global-types';
import { isGermanVerb } from 'german-types';

export const processDeRecord = (record: LanguageVerbBase) => {
  // confirm record is German
  if (!isGermanVerb(record)) {
    throw new Error (`Error: ${record.infinitive} is not a valid German Verb`)
  }

  // Until processing for separable verbs is ready
  if (record.infinitive.includes('|')) {
    return;
  }

  // Hydrate

  return record;
}
