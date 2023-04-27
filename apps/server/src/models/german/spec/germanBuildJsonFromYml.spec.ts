import mock from 'mock-fs';

import fs from 'fs';
import sinon from 'sinon';
import { germanVerbData } from '../germanBuildJsonFromYml';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('./@models/shared/readYaml', () => ({
  __esModule: true,
  ...jest.requireActual('./@models/shared/readYaml'),
  findRelativePathToData: () => './data/',
}));

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

const fileOne = `date: 15

ratten:
  language: de
  translations:
    en: guess
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b
    `;

const fileTwo = `
ratten:
  language: de
  translations:
    en: speak
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b
      `;

const fileThree = `date: 16

ratten:
  language: de
  translations:
    en: guess, advise
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b

bobben:
  language: de
  translations:
    en: to have a test
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b
      `;

const fileFour = `date: 17

fehlen:
  language: de
  translations:
    en: feel
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b

suchen:
  language: de
  translations:
    en: to have a test
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b
      `;

const fileFive = `date: bob
fliegen:
  language: de
  translations:
    en: to have a test
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b
`;

describe('processes bekommen', () => {
  const originalPWD = process.env.PWD;
  let writeFileSync: sinon.SinonStub;

  const bekommen = `date: 15

bekommen:
  language: de
  translations:
    en: get
  hilfsverb: haben
      `;

  beforeEach(() => {
    process.env.PWD = './';
    writeFileSync = sinon.stub(fs, 'writeFileSync').returns();

    mock({
      data: {
        'german1.yaml': bekommen,
      },
    });
  });

  afterEach(() => {
    process.env.PWD = originalPWD;
    mock.restore();
    writeFileSync.restore();
  });

  it('reads files', () => {
    const result = germanVerbData();
    const expected = {
      date: 1577836800000,
      verbs: {
        bekommen: {
          drop: false,
          hilfsverb: 'haben',
          infinitive: 'bekommen',
          language: 'de',
          translations: { en: 'get' },
        },
      },
    };
    expect(writeFileSync.callCount).toBe(1);
    expect(result).toEqual(expected);
  });
});

describe('weeds out malformed verb', () => {
  const originalPWD = process.env.PWD;
  let writeFileSync: sinon.SinonStub;

  const bekommen = `date: 15

fehlen:
  language: de
  translations:
    en: feel
  helper: bob

bekommen:
  language: de
  translations:
    en: get
  hilfsverb: haben
      `;

  beforeEach(() => {
    process.env.PWD = './';
    writeFileSync = sinon.stub(fs, 'writeFileSync').returns();

    mock({
      data: {
        'german1.yaml': bekommen,
      },
    });
  });

  afterEach(() => {
    process.env.PWD = originalPWD;
    mock.restore();
    writeFileSync.restore();
  });

  it('reads files', () => {
    const result = germanVerbData();
    const expected = {
      date: 1577836800000,
      verbs: {
        bekommen: {
          drop: false,
          hilfsverb: 'haben',
          infinitive: 'bekommen',
          language: 'de',
          translations: { en: 'get' },
        },
      },
    };
    // expect(writeFileSync.callCount).toBe(1);
    expect(result).toEqual(expected);
  });
});

describe('germanVerbData', () => {
  const originalPWD = process.env.PWD;
  let writeFileSync: sinon.SinonStub;

  beforeEach(() => {
    process.env.PWD = './';
    writeFileSync = sinon.stub(fs, 'writeFileSync').returns();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mock({
      data: {
        'german1.yaml': fileOne,
        'german2.yaml': fileTwo,
        'german3.yaml': fileThree,
        'german4.yaml': fileFour,
        'german5.yaml': fileFive,
      },
    });
  });

  afterEach(() => {
    process.env.PWD = originalPWD;
    mock.restore();
    writeFileSync.restore();
  });

  it('reads files', () => {
    germanVerbData();
    expect(writeFileSync.callCount).toBe(1);
  });
});

describe('weeds out malformed seperable verbs', () => {
  const originalPWD = process.env.PWD;
  let writeFileSync: sinon.SinonStub;

  const bekommen = `date: 15

ent|fehlen:
  language: de
  translations:
    en: feel
  hilfsverb: bob

bekommen:
  language: de
  translations:
    en: get
  hilfsverb: haben
      `;

  beforeEach(() => {
    process.env.PWD = './';
    writeFileSync = sinon.stub(fs, 'writeFileSync').returns();

    mock({
      data: {
        'german1.yaml': bekommen,
      },
    });
  });

  afterEach(() => {
    process.env.PWD = originalPWD;
    mock.restore();
    writeFileSync.restore();
  });

  it('reads the malformed verb', () => {
    const result = germanVerbData();
    const expected = {
      date: 1577836800000,
      verbs: {
        bekommen: {
          drop: false,
          hilfsverb: 'haben',
          infinitive: 'bekommen',
          language: 'de',
          translations: { en: 'get' },
        },
      },
    };
    // expect(writeFileSync.callCount).toBe(1);
    expect(result).toEqual(expected);
  });
});

describe('processes well-formed seperable verbs', () => {
  const originalPWD = process.env.PWD;
  const bekommen = `date: 15

dar|fehlen:
  language: de
  translations:
    en: feel
  hilfsverb: haben

bekommen:
  language: de
  translations:
    en: get
  hilfsverb: haben
      `;

  beforeEach(() => {
    process.env.PWD = './';
    mock({
      data: {
        'german1.yaml': bekommen,
      },
    });
  });

  afterEach(() => {
    process.env.PWD = originalPWD;
    mock.restore();
  });

  it('reads files', () => {
    const result = germanVerbData();
    const expected = {
      date: 1577836800000,
      verbs: {
        bekommen: {
          drop: false,
          hilfsverb: 'haben',
          infinitive: 'bekommen',
          language: 'de',
          translations: {
            en: 'get',
          },
        },
        darfehlen: {
          base: 'fehlen',
          hilfsverb: 'haben',
          language: 'de',
          particle: 'dar',
          translations: {
            en: 'feel',
          },
        },
      },
    };
    expect(result).toEqual(expected);
  });
});
