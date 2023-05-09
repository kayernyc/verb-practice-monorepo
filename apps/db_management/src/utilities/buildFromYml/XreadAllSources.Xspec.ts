// import mock from 'mock-fs';
// import { germanTypeGuard } from '@german/germanBuildJsonFromYml';
// import { buildAllSource } from '../buildFromYml/readAllSources';

// describe('german language data source', () => {
//   beforeEach(() => {
//     const fileOne = `date: 16

// willem:
//   language: es
//   ringer: bob
//   translations:
//     en: to have a test
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//     `;

//     const fileTwo = `date: 16

//    bake:
//     language: en
//     translations:
//       de: baken
//       `;

//     const fileThree = `date: 16

// ratten:
//   language: de
//   translations:
//     en: guess
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b

// bobben:
//   language: de
//   translations:
//     en: to have a test
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//       `;
//     const fileFour = `date: 17

// fehlen:
//   language: de
//   translations:
//     en: feel
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b

// suchen:
//   language: de
//   translations:
//     en: to have a test
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//       `;

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     mock({
//       'badgerman.yaml': fileOne,
//       'wrong.yaml': fileTwo,
//       'german.yaml': fileThree,
//       'german_2.yaml': fileFour,
//     });
//   });

//   afterEach(() => {
//     mock.restore();
//   });

//   it('reads german files', () => {
//     const expected = {
//       bobben: {
//         language: 'de',
//         stems: { partizip: 'b', 'präsens du/es': 'ha', präteritum: 't' },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: { en: 'to have a test' },
//         'weak endings': true,
//       },
//       fehlen: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'feel',
//         },
//         'weak endings': true,
//       },
//       suchen: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'to have a test',
//         },
//         'weak endings': true,
//       },
//       ratten: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'guess',
//         },
//         'weak endings': true,
//       },
//     };

//     const result = buildAllSource('german', germanTypeGuard, './');
//     expect(result).toStrictEqual(expected);
//   });

//   it('reads and rejects bad german files', () => {
//     const expected = {};

//     const result = buildAllSource('badgerman', germanTypeGuard, './');
//     expect(result).toStrictEqual(expected);
//   });

//   it('throws an error for mal-formed yamls', () => {
//     expect(() => {
//       buildAllSource('wrong', germanTypeGuard, './');
//     }).toThrow();
//   });
// });

// describe('german language data sources with conflicting data', () => {
//   beforeEach(() => {
//     const fileOne = `date: 15

// ratten:
//   language: de
//   translations:
//     en: guess
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//     `;

//     const fileTwo = `
// ratten:
//   language: de
//   translations:
//     en: speak
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//       `;

//     const fileThree = `date: 16

// ratten:
//   language: de
//   translations:
//     en: guess, advise
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b

// bobben:
//   language: de
//   translations:
//     en: to have a test
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//       `;

//     const fileFour = `date: 17

// fehlen:
//   language: de
//   translations:
//     en: feel
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b

// suchen:
//   language: de
//   translations:
//     en: to have a test
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
//       `;

//     const fileFive = `date: bob
// fliegen:
//   language: de
//   translations:
//     en: to have a test
//   tags:
//     - hilfsverb
//   strong:
//   weak endings: true
//   stems:
//     präsens du/es: ha
//     präteritum: t
//     partizip: b
// `;

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     mock({
//       'german1.yaml': fileOne,
//       'german2.yaml': fileTwo,
//       'german3.yaml': fileThree,
//       'german4.yaml': fileFour,
//       'german5.yaml': fileFive,
//     });
//   });

//   afterEach(() => {
//     mock.restore();
//   });

//   it('reads german files', () => {
//     const expected = {
//       bobben: {
//         language: 'de',
//         stems: { partizip: 'b', 'präsens du/es': 'ha', präteritum: 't' },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: { en: 'to have a test' },
//         'weak endings': true,
//       },
//       fehlen: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'feel',
//         },
//         'weak endings': true,
//       },
//       suchen: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'to have a test',
//         },
//         'weak endings': true,
//       },
//       ratten: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'guess, advise',
//         },
//         'weak endings': true,
//       },
//       fliegen: {
//         language: 'de',
//         stems: {
//           partizip: 'b',
//           'präsens du/es': 'ha',
//           präteritum: 't',
//         },
//         strong: null,
//         tags: ['hilfsverb'],
//         translations: {
//           en: 'to have a test',
//         },
//         'weak endings': true,
//       },
//     };

//     const result = buildAllSource('german', germanTypeGuard, './');
//     expect(result).toStrictEqual(expected);
//   });
// });
