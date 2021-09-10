"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const port = 3000;
const germanverbs_1 = require("./models/germanverbs");
// We are using our packages here
app.use(express_1.default.json()); // to support JSON-encoded bodies
app.use(express_1.default.urlencoded({
    // to support URL-encoded bodies
    extended: true,
}));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Welcome to your server');
    (0, germanverbs_1.germanVerbData)();
});
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server is runing on port ${port}`);
});
//# sourceMappingURL=app.js.map