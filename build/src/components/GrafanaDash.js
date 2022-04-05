"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
function GrafChart() {
    return (react_1.default.createElement(material_1.Container, { maxWidth: "false", title: "monitor-container", sx: { marginTop: '1em' } },
        react_1.default.createElement(material_1.Card, null,
            react_1.default.createElement("iframe", { title: "grafana-dashboard", width: "100%", height: "1080px", src: "http://localhost:3000/d/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1648664561105&to=1648668161105" }))));
}
exports.default = GrafChart;
//# sourceMappingURL=GrafanaDash.js.map