import { LanguageVerbCandidate } from 'global-types';
import { processDeRecord } from './processDeRecord';
import {
  bleibenGermanVerb,
  bleibenReturnObject,
  blendenGermanVerb,
  blendenReturnObject,
  fliegenGermanVerb,
  fliegenReturnObject,
  gehenGermanVerb,
  gehenReturnObject,
  habenGermanVerb,
  habenReturnObject,
  könnenGermanVerb,
  könnenReturnObject,
  nehmenGermanVerb,
  nehmenReturnObject,
  seinGermanVerb,
  seinReturnObject,
  werdenGermanVerb,
  werdenReturnObject,
} from './spec_constants/specConstants';
import {
  bedürfenGermanVerb,
  bedürfenReturnObject,
  brennenGermanVerb,
  brennenReturnObject,
  gelingenGermanVerb,
  gelingenReturnObject,
  widersprechenGermanVerb,
  widersprechenReturnObject,
  ähnelnGermanVerb,
  ähnelnReturnObject,
} from './spec_constants/newVerbsSpec';

const verbsToTest = [
  ['brennen', brennenGermanVerb, brennenReturnObject],
  ['haben', habenGermanVerb, habenReturnObject],
  ['sein', seinGermanVerb, seinReturnObject],
  ['werden', werdenGermanVerb, werdenReturnObject],
  ['können', könnenGermanVerb, könnenReturnObject],
  ['gehen', gehenGermanVerb, gehenReturnObject],
  ['fliegen', fliegenGermanVerb, fliegenReturnObject],
  ['bleiben', bleibenGermanVerb, bleibenReturnObject],
  ['ähneln', ähnelnGermanVerb, ähnelnReturnObject],
  ['bedürfen', bedürfenGermanVerb, bedürfenReturnObject],
  ['widersprechen', widersprechenGermanVerb, widersprechenReturnObject],
  ['gelingen', gelingenGermanVerb, gelingenReturnObject],
  ['nehmen', nehmenGermanVerb, nehmenReturnObject],
  ['blenden', blendenGermanVerb, blendenReturnObject],
];

describe('processDeRecord matches real conjugations:', () => {
  test.each(verbsToTest)(
    `'returns %s correctly'`,
    (infinitive, input, output) => {
      const result = processDeRecord(input as LanguageVerbCandidate);
      expect(result).toEqual(output);
    },
  );
});
