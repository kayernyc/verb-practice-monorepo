"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weedOutDuplicates = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const args = process.argv;
// eslint-disable-next-line no-console
console.log(args);
const filesArray = args.slice(2);
function weedOutDuplicates() {
    const seenVerbs = {
        de: [],
        en: [],
    };
    // eslint-disable-next-line no-console
    console.log({ filesArray });
    filesArray.forEach((filePath) => {
        // eslint-disable-next-line no-console
        try {
            const fileContents = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../../', filePath), 'utf8');
            const data = js_yaml_1.default.load(fileContents);
            Object.keys(data).forEach((key) => {
                const langKey = data[key].language;
                const wordArray = seenVerbs[langKey];
                if (!wordArray.includes(key)) {
                    wordArray.push(key);
                }
                else {
                    // eslint-disable-next-line no-console
                    console.warn(`${filePath} ${key} is a duplicate`);
                }
            });
        }
        catch (err) {
            // eslint-disable-next-line no-console
            console.log(`Error in ${filePath}: ${err} ${__dirname}`);
        }
    });
}
exports.weedOutDuplicates = weedOutDuplicates;
weedOutDuplicates();
//# sourceMappingURL=remove-duplicates.js.map