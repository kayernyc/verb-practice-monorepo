"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable arrow-body-style */
const mock_fs_1 = __importDefault(require("mock-fs"));
const remove_duplicates_1 = require("../remove-duplicates");
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
        (0, mock_fs_1.default)({
            'phil.yaml': fileOne,
            'rick.yaml': fileOne,
            'sue.yaml': fileTwo,
        });
    });
    it('flags duplicate verbs', () => {
        const logSpy = jest.spyOn(console, 'warn');
        (0, remove_duplicates_1.weedOutDuplicates)(['phil.yaml', 'rick.yaml']);
        expect(logSpy).toHaveBeenCalledWith('rick.yaml willem is a duplicate');
    });
    afterAll(() => {
        mock_fs_1.default.restore();
    });
});
//# sourceMappingURL=remove-duplicates.spec.js.map