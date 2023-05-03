import { LanguageVerbBase } from 'global-types';
import { GermanVerbTypeGuard } from 'german-types';

export const processDeRecord = (record: LanguageVerbBase) => {
  // confirm record is German
  if (!GermanVerbTypeGuard(record)) {
    throw new Error (`Error: ${record.infinitive} is not a valid German Verb`)
  }
}