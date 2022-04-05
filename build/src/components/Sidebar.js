"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
function Sidebar() {
    return (react_1.default.createElement(material_1.Drawer, { variant: "permanent" },
        react_1.default.createElement(material_1.List, null,
            react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/" },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(icons_material_1.Home, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: "splash DEV ONLY" })),
            react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/overview" },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(icons_material_1.Home, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: "Overview" })),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/cluster" },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(icons_material_1.Equalizer, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: "Cluster Metrics" })),
            react_1.default.createElement(material_1.Collapse, { in: true, component: "li", timeout: "auto" },
                react_1.default.createElement(material_1.List, { disablePadding: true, sx: { ml: 6 } },
                    react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/brokers" },
                        react_1.default.createElement(material_1.ListItemText, { primary: "Brokers" })),
                    react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/consumers" },
                        react_1.default.createElement(material_1.ListItemText, { primary: "Consumers" })),
                    react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/producers" },
                        react_1.default.createElement(material_1.ListItemText, { primary: "Producers" })),
                    react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/topics" },
                        react_1.default.createElement(material_1.ListItemText, { primary: "Topics" })),
                    react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/HelpTab" },
                        react_1.default.createElement(material_1.ListItemText, { primary: "Quick Start" })))),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/performance" },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(icons_material_1.TrendingUp, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: "Performance Metrics" })),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.MenuItem, { component: react_router_dom_1.Link, to: "/settings" },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(icons_material_1.Settings, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: "Settings" })))));
}
exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map