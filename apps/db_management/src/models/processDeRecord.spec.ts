import { LanguageMap, LanguageVerbBase } from "global-types";
import { processDeRecord } from "./processDeRecord";

describe('processDeRecord', () => {
  const testRecord: LanguageVerbBase = {
    language: LanguageMap.de,
    translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
    infinitive:'ab|blenden'
  };

  const testRecordWrong: LanguageVerbBase = {
    language: LanguageMap.fr,
    translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
    infinitive:'parler'
  };

  it('sees something', () => {
    processDeRecord(testRecord);
    expect(true).toBeTruthy();
  });
});