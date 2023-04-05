import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

import { EnglishJsonData, EnglishVerb, EnglishVerbHydrated } from '@english/englishTypes';
import { findRelativePathToData } from '@models/shared/readYaml';
import { vowels } from '@english/englishConstants';

dotenv.config();

const dataPath = findRelativePathToData(__dirname);

export function importJsonData(): EnglishJsonData {
  try {
    const jsonPath = path.resolve(dataPath, 'englishVerbsUnhydrated.json');
    const data: string = fs.readFileSync(jsonPath, 'utf8');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedData: EnglishJsonData = JSON.parse(data) as EnglishJsonData;
    return parsedData;
  } catch (err: unknown) {
    const detail = err instanceof Error ? err.message : 'unknown error';
    throw Error(`English data file not found: ${detail}`);
  }
}

const verbsData: EnglishJsonData = importJsonData();

const trimVerb = (infinitive: string): {
  participle: string,
  presentParticiple: string,
  thirdPerson: string
} => {
  const trimmedBase = infinitive.slice(0, infinitive.length - 1);
  const lastChar = infinitive.slice(-1);

  if (lastChar === 'e') {
    return {
      participle: `${infinitive}d`,
      presentParticiple: `${infinitive.slice(0, infinitive.length - 1)}ing`,
      thirdPerson: `${infinitive}s`,
    };
  }

  if (lastChar === 'y'
    && !vowels.includes(infinitive.charAt(infinitive.length - 2))) {
    return {
      participle: `${trimmedBase}ied`,
      presentParticiple: `${infinitive}ing`,
      thirdPerson: `${trimmedBase}ies`,
    };
  }

  if (lastChar === 'c') {
    return {
      participle: `${infinitive}ked`,
      presentParticiple: `${infinitive}king`,
      thirdPerson: `${infinitive}s`,
    };
  }

  const doublingRegex = /[bcdfghjklmnprstvwxyz][aeiou][bcdfghjklmnprstvwxz]\b/;

  if (doublingRegex.test(infinitive)) {
    return {
      participle: `${infinitive}${lastChar}ed`,
      presentParticiple: `${infinitive}${lastChar}ing`,
      thirdPerson: `${infinitive}s`,
    };
  }

  return {
    participle: `${infinitive}ed`,
    presentParticiple: `${infinitive}ing`,
    thirdPerson: `${infinitive}s`,
  };
};

export function standardHydration(verbConfiguration: EnglishVerb): EnglishVerbHydrated {
  const { infinitive } = verbConfiguration;
  const { participle, presentParticiple, thirdPerson } = trimVerb(infinitive);

  return {
    infinitive,
    participle,
    presentParticiple,
    past: {
      i: participle,
      it: participle,
      we: participle,
    },
    present: {
      i: infinitive,
      it: thirdPerson,
      we: infinitive,
    },
  };
}

export function hydrateVerb(verbConfiguration: EnglishVerb) {
  return standardHydration(verbConfiguration);
}

export const hydrateFromInfinitive = (
  infinitive: string,
  _verbsData?: EnglishJsonData,
): string | EnglishVerbHydrated => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const verbDictionary = _verbsData?.verbs ?? verbsData.verbs;

  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const verbConfiguration: EnglishVerb = verbDictionary[infinitive];

  if (verbConfiguration) {
    return hydrateVerb(verbConfiguration);
  }
  return infinitive;
};
