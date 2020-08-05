"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
const react_2 = __importDefault(require("react"));
const index_1 = __importDefault(require("./index"));
describe('CountDownTimer', () => {
    it('renders without crashing', () => {
        const { container } = react_1.render(react_2.default.createElement(index_1.default, { dateTime: "2020-07-25T21:22:19Z" }));
        expect(container).toBeTruthy();
    });
});
//# sourceMappingURL=CountDownTimer.test.js.map