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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Brokers = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./Brokers'))));
const Consumers = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./Consumers'))));
const Producers = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./Producers'))));
const Topics = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./Topics'))));
const HelpTab = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./HelpTab'))));
const Cluster_1 = __importDefault(require("./Cluster"));
const Overview_1 = __importDefault(require("./Overview"));
const Performance_1 = __importDefault(require("./Performance"));
const Settings_1 = __importDefault(require("./Settings"));
const Sidebar_1 = __importDefault(require("./Sidebar"));
const SplashPage_1 = __importDefault(require("./SplashPage"));
class App extends react_1.Component {
    constructor() {
        super();
        this.state = {
            showSidebar: true,
        };
    }
    toggleSidebar() {
        this.setState({
            showSidebar: true,
        });
    }
    componentDidUpdate() {
        console.log('hi');
    }
    render() {
        console.log(window.location.pathname);
        return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
            this.state.showSidebar && react_1.default.createElement(Sidebar_1.default, null),
            react_1.default.createElement("main", { style: { marginLeft: '250px' } },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", element: react_1.default.createElement(SplashPage_1.default, { toggleSidebar: this.toggleSidebar.bind(this) }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/overview", element: react_1.default.createElement(Overview_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/cluster", element: react_1.default.createElement(Cluster_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/brokers", element: react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(react_1.default.Fragment, null, "...") },
                            react_1.default.createElement(Brokers, null)) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/consumers", element: react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(react_1.default.Fragment, null, "...") },
                            react_1.default.createElement(Consumers, null)) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/producers", element: react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(react_1.default.Fragment, null, "...") },
                            react_1.default.createElement(Producers, null)) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/topics", element: react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(react_1.default.Fragment, null, "...") },
                            react_1.default.createElement(Topics, null)) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/HelpTab", element: react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(react_1.default.Fragment, null, "...") },
                            react_1.default.createElement(HelpTab, null)) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/performance", element: react_1.default.createElement(Performance_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/settings", element: react_1.default.createElement(Settings_1.default, null) })))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map