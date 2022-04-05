"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const { clipboard } = require('electron');
const react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
const HelpTab = () => {
    const [copiedText, setCopiedText] = (0, react_1.useState)('');
    const topic = 'docker exec -it kafka101 \
  kafka-topics \
  --create \
  --partitions 6 \
  --replication-factor 3 \
  --topic demo-topic \
  --bootstrap-server kafka101:29092';
    const producer = 'docker exec -it kafka101 \
  kafka-producer-perf-test \
  --throughput 500 \
  --num-records 100000000 \
  --topic demo-topic \
  --record-size 100 \
  --producer-props bootstrap.servers=kafka101:29092';
    const consumer = 'docker exec -it kafka101 \
  kafka-consumer-perf-test \
  --messages 100000000 \
  --timeout 1000000 \
  --topic demo-topic \
  --reporting-interval 1000 \
  --show-detailed-stats \
  --bootstrap-server kafka101:29092';
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Quick Start"),
        react_1.default.createElement("h3", null, "Create a Topic:"),
        react_1.default.createElement("div", { class: "codeblock" },
            react_1.default.createElement("span", { class: "code", value: topic },
                "$ docker exec -it kafka101 \\ ",
                react_1.default.createElement("br", null),
                "kafka-topics \\",
                react_1.default.createElement("br", null),
                "--create \\",
                react_1.default.createElement("br", null),
                "--partitions 6 \\",
                react_1.default.createElement("br", null),
                "--replication-factor 3 \\",
                react_1.default.createElement("br", null),
                "--topic demo-topic \\",
                react_1.default.createElement("br", null),
                "--bootstrap-server kafka101:29092",
                react_1.default.createElement("br", null)),
            react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: copiedText },
                react_1.default.createElement("button", { type: "button", id: "topic", class: "copyButton", onClick: e => setCopiedText(topic) }, "Copy"))),
        react_1.default.createElement("h3", null, "Produce messages:"),
        react_1.default.createElement("div", { class: "codeblock" },
            react_1.default.createElement("span", { class: "code", value: producer },
                "$ docker exec -it kafka101 \\ ",
                react_1.default.createElement("br", null),
                "kafka-producer-perf-test \\",
                react_1.default.createElement("br", null),
                "--throughput 500 \\",
                react_1.default.createElement("br", null),
                "--num-records 100000000 \\",
                react_1.default.createElement("br", null),
                "--topic demo-topic \\",
                react_1.default.createElement("br", null),
                "--record-size 100 \\",
                react_1.default.createElement("br", null),
                "--producer-props bootstrap.servers=kafka101:29092",
                react_1.default.createElement("br", null)),
            react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: copiedText },
                react_1.default.createElement("button", { type: "button", id: "producer", class: "copyButton", onClick: e => setCopiedText(producer) }, "Copy"))),
        react_1.default.createElement("h3", null, "Consume messages:"),
        react_1.default.createElement("div", { class: "codeblock" },
            react_1.default.createElement("span", { class: "code", value: consumer },
                "$ docker exec -it kafka101 \\ ",
                react_1.default.createElement("br", null),
                "kafka-consumer-perf-test \\",
                react_1.default.createElement("br", null),
                "--messages 100000000 \\",
                react_1.default.createElement("br", null),
                "--timeout 1000000 \\",
                react_1.default.createElement("br", null),
                "--topic demo-topic \\",
                react_1.default.createElement("br", null),
                "--reporting-interval 1000 \\",
                react_1.default.createElement("br", null),
                "--show-detailed-stats \\",
                react_1.default.createElement("br", null),
                "--bootstrap-server kafka101:29092",
                react_1.default.createElement("br", null)),
            react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: copiedText },
                react_1.default.createElement("button", { type: "button", id: "consumer", class: "copyButton", onClick: e => setCopiedText(consumer) }, "Copy")))));
};
exports.default = HelpTab;
//# sourceMappingURL=HelpTab.js.map