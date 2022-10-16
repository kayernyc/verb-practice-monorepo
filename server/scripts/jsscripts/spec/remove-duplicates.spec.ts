/* eslint-disable arrow-body-style */
import mock from 'mock-fs';
import { weedOutDuplicates } from '../remove-duplicates';

describe('tests files for duplicates', () => {
  beforeAll(() => {
    const fileOne = `date: 16

willem:
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

    const fileTwo = `date: 16

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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mock({
      'phil.yaml': fileOne,
      'rick.yaml': fileOne,
      'sue.yaml': fileTwo,
    });
  });

  it('flags duplicate verbs', () => {
    const logSpy = jest.spyOn(console, 'warn');
    weedOutDuplicates(['phil.yaml', 'rick.yaml']);

    expect(logSpy).toHaveBeenCalledWith('rick.yaml willem is a duplicate');
  });

  afterAll(() => {
    mock.restore();
  });
});
