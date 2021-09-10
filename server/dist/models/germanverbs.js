"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.germanVerbData = void 0;
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const germanEnums_1 = require("./germanEnums");
// tslint:disable: no-console
const newJsonObj = {
    date: Date.now(),
};
const germanStemsDictionary = {
    'präsens du/es': 'duEs',
    'präteritum': 'präteritum',
    'partizip': 'partizip',
    'präsens singular': 'präsensSingular',
    'k2präsens': 'k2präsens'
};
// let germanVerbsDictionary;
const createVerb = (_infinitive, dataObj) => {
    const languages = [dataObj.en];
    const newVerb = {
        drop: dataObj["drop ich/es pr\u00e4sens endings"] || false,
        hilfsverb: dataObj.hilfsverb || 'haben',
        infinitive: _infinitive,
        languages,
        strong: dataObj.strong || false
    };
    if (dataObj.irregular) {
        const objectKeys = Object.keys(dataObj.irregular);
        const irregularObj = {};
        objectKeys.forEach((key) => {
            const newKey = germanEnums_1.GermanTenses[key];
            console.log({ newKey });
            console.log(dataObj.irregular[key]);
        });
        // newVerb.irregular = irregularObj;
    }
    return newVerb;
};
const processVerbs = (data) => {
    var _a, _b;
    const hilfsverb = [];
    const modal = [];
    const irregular = [];
    for (const infiinitve in data) {
        if (data.hasOwnProperty(infiinitve) && infiinitve !== 'date') {
            const obj = data[infiinitve];
            if ((_a = obj.tags) === null || _a === void 0 ? void 0 : _a.includes('hilfsverb')) {
                hilfsverb.push(infiinitve);
            }
            if ((_b = obj.tags) === null || _b === void 0 ? void 0 : _b.includes('modal')) {
                modal.push(infiinitve);
            }
            const hydratedVerb = createVerb(infiinitve, obj);
            newJsonObj[infiinitve] = hydratedVerb;
        }
    }
    // hydrate all hilfsverbs and modals
    // console.log(hilfsverb);
    // console.log(modal);
    // console.log(irregular);
    // console.log({ newJsonObj })
};
function germanVerbData() {
    try {
        const fileContents = fs_1.default.readFileSync('./data/germanverbs.yaml', 'utf8');
        const data = js_yaml_1.default.load(fileContents);
        processVerbs(data);
    }
    catch (err) {
        console.log(`Error in germanverbs model: ${err}`);
    }
}
exports.germanVerbData = germanVerbData;
//# sourceMappingURL=germanverbs.js.map