import mock from 'mock-fs';

import fs from 'fs';
import sinon from 'sinon';
import {
  buildAllSourceEnglish,
  processVerbs,
  readYamls,
  writeProcessedVerbsToFile,
} from '../englishBuildJsonFromYml';
import { EnglishPronounKeys } from '../englishTypes';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

describe('readYamls', () => {
  beforeAll(() => {
    const fileOne = `date: 16

have:
  language: en
  translations:
    de: haben
  participle: had
  irregular:
    present:
      i: have
      it: has
      we: have
    past: had
    `;

    const fileTwo = `date: 16

adapt:
  language: en
  translations:
    fr: adapter
    `;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mock({
      'phil.yaml': fileOne,
      'rick.yaml': fileOne,
      'sue.yaml': fileTwo,
      data: {
        bob: fileTwo,
      },
    });
  });

  it('reads a single file if it exists.', () => {
    const readResult = readYamls('phil.yaml', './');

    const expected = [
      {
        date: 16,
        have: {
          language: 'en',
          translations: { de: 'haben' },
          irregular: {
            past: 'had',
            present: { i: 'have', it: 'has', we: 'have' },
          },
          participle: 'had',
        },
      },
    ];
    expect(readResult).toEqual(expected);
  });

  it('reads files if they exist.', () => {
    const readResult = readYamls(['phil.yaml', 'rick.yaml'], './');
    const expected = [
      {
        date: 16,
        have: {
          language: 'en',
          translations: { de: 'haben' },
          irregular: {
            past: 'had',
            present: { i: 'have', it: 'has', we: 'have' },
          },
          participle: 'had',
        },
      },
      {
        date: 16,
        have: {
          language: 'en',
          translations: { de: 'haben' },
          irregular: {
            past: 'had',
            present: {
              i: 'have',
              it: 'has',
              we: 'have',
            },
          },
          participle: 'had',
        },
      },
    ];

    expect(readResult).toEqual(expected);
  });

  it("throws errors if files don't exist.", () => {
    expect(() => {
      readYamls(['phillis.yaml', 'rick.yaml'], './');
    }).toThrowError();
  });

  afterAll(() => {
    mock.restore();
  });
});

describe('processVerbs', () => {
  const input = [
    {
      date: 16,
      have: {
        language: 'en',
        translations: { de: 'haben' },
        irregular: {
          past: 'had',
          present: { i: 'have', it: 'has', we: 'have' },
        },
        participle: 'had',
      },
    },
    {
      date: 16,
      have: {
        language: 'en',
        translations: { de: 'haben' },
        irregular: {
          past: 'had',
          present: {
            i: 'have',
            it: 'has',
            we: 'have',
          },
        },
        participle: 'had',
      },
    },
  ];
  const result = processVerbs(input);

  it('returns an object with the current time', () => {
    const { date } = result;
    const expected = 1577836800000;
    expect(date).toEqual(expected);
  });

  it('returns an object verbs after a date', () => {
    const expected = {
      date: 1577836800000,
      verbs: {
        have: {
          irregular: {
            past: 'had',
            present: { i: 'have', it: 'has', we: 'have' },
          },
          language: 'en',
          participle: 'had',
          translations: { de: 'haben' },
        },
      },
    };
    expect(result).toEqual(expected);
  });
});

describe('writing files', () => {
  let writeFileSync: sinon.SinonStub;

  const input = {
    date: 16,
    verbs: {
      have: {
        infinitive: 'have',
        language: 'en',
        translations: { de: 'haben' },
        irregular: {
          past: 'had',
          present: {
            [EnglishPronounKeys.i]: 'have',
            [EnglishPronounKeys.it]: 'has',
            [EnglishPronounKeys.we]: 'have',
          },
        },
        participle: 'had',
      },
    },
  };

  describe('read/write functions', () => {
    beforeEach(() => {
      // eslint-disable-next-line max-len
      /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      writeFileSync = sinon.stub(fs, 'writeFileSync').returns();
    });

    describe('buildAllSourceEnglish', () => {
      it('should process files and write to the file system if files are present.', () => {
        buildAllSourceEnglish();
        expect(writeFileSync.callCount).toBe(1);
      });
    });

    it('should write a json object', () => {
      writeProcessedVerbsToFile('files-test/testing_bob.json', input, './');
      expect(writeFileSync.callCount).toBe(1);
    });

    it('should write a json object even when not passed a data path', () => {
      writeProcessedVerbsToFile('files-test/testing_bob.json', input);
      expect(writeFileSync.callCount).toBe(1);
    });

    afterEach(() => {
      writeFileSync.restore();
    });
  });

  // eslint-disable-next-line max-len
  /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
});
