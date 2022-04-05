"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const electron_1 = require("electron");
function SplashPage() {
    const [brokers, setBrokers] = react_1.default.useState(1);
    const handleBrokerEntry = (event) => {
        event.preventDefault();
        const brokerCount = parseInt(event.target[0].value);
        electron_1.ipcRenderer.send('brokers:input', brokerCount);
    };
    const handleChange = (event) => {
        setBrokers(event.target.value);
    };
    return (react_1.default.createElement("center", null,
        react_1.default.createElement("form", { onSubmit: handleBrokerEntry },
            react_1.default.createElement(material_1.InputLabel, { id: "demo-simple-select-label" }, "Brokers"),
            react_1.default.createElement(material_1.Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: brokers, label: "Age", onChange: handleChange },
                react_1.default.createElement(material_1.MenuItem, { value: 1 }, "1"),
                react_1.default.createElement(material_1.MenuItem, { value: 2 }, "2"),
                react_1.default.createElement(material_1.MenuItem, { value: 3 }, "3"),
                react_1.default.createElement(material_1.MenuItem, { value: 4 }, "4"),
                react_1.default.createElement(material_1.MenuItem, { value: 5 }, "5")),
            react_1.default.createElement(material_1.Button, { type: "submit", variant: "contained", color: "primary" }, "Submit"))));
}
exports.default = SplashPage;
//# sourceMappingURL=SplashPage.js.map