import mock from 'mock-fs';
import { processVerbs, readYamls } from '../englishBuildJsonFromYml';

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

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

  it('reads files if they exist.', () => {
    const readResult = readYamls(['phil.yaml', 'rick.yaml'], './');
    const expected = [{
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

  it('throws errors if they don\'t exist.', () => {
    expect(() => {
      readYamls(['phillis.yaml', 'rick.yaml'], './');
    }).toThrowError();
  });

  afterAll(() => {
    mock.restore();
  });
});

describe('processVerbs', () => {
  const input = [{
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
