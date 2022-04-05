"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const styles_1 = require("@mui/material/styles");
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const App_1 = __importDefault(require("./components/App"));
const theme = (0, styles_1.createTheme)({
    palette: {
        mode: 'dark',
    },
});
react_dom_1.default.render(react_1.default.createElement(styles_1.ThemeProvider, { theme: theme },
    react_1.default.createElement(CssBaseline_1.default, null),
    react_1.default.createElement(App_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map