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
// const path = require('path');
const path_1 = __importDefault(require("path"));
// import * as path from 'path';
// import module from 'path';
const electron_1 = require("electron");
const child_process_1 = require("child_process");
const configGenerator = __importStar(require("./configs/configGenerator"));
// const { app, ipcMain, Menu } = require('electron');
// const { exec } = require('child_process');
// const configGenerator = require('./configs/configGenerator.ts');
const MainWindow_jsx_1 = __importDefault(require("./app/MainWindow.jsx"));
const PopupWindow_jsx_1 = __importDefault(require("./app/PopupWindow.jsx"));
const MetricTray_jsx_1 = __importDefault(require("./app/MetricTray.jsx"));
// const MainWindow = require('./app/MainWindow.jsx');
// const PopupWindow = require('./app/PopupWindow.jsx');
// const MetricTray = require('./app/MetricTray.jsx');
let mainWindow;
let popupWindow;
let tray;
electron_1.app.on('ready', () => {
    // creates main electron window using menu from template below
    mainWindow = new MainWindow_jsx_1.default(`file://${__dirname}/src/index.html`);
    const mainMenu = electron_1.Menu.buildFromTemplate(menuTemplate);
    electron_1.Menu.setApplicationMenu(mainMenu);
    mainWindow.on('show', () => {
        setTimeout(() => {
            mainWindow.focus();
        }, 200);
    });
    mainWindow.show();
    // creates popup window that is opened / closed when user clicks on taskbar icon
    popupWindow = new PopupWindow_jsx_1.default(`file://${__dirname}/src/popup.html`);
    const iconName = process.platform === 'darwin' ? 'icon-mac.png' : 'icon-windows.png';
    const iconPath = path_1.default.join(__dirname, `/src/assets/${iconName}`);
    tray = new MetricTray_jsx_1.default(iconPath, popupWindow);
});
// build app menu
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                role: 'quit',
            },
        ],
    },
];
if (process.platform === 'darwin') {
    menuTemplate.unshift({
        label: '',
    });
}
if (process.env.NODE_ENV === 'development') {
    menuTemplate.push({
        label: 'Developer',
        submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }],
    });
}
electron_1.ipcMain.on('brokers:input', (_, brokerCount) => {
    if (brokerCount === 1) {
        return dockerExec('./configs/docker/docker_single_node.yml');
    }
    configGenerator(brokerCount);
    return dockerExec('./configs/docker/docker_multiple_nodes.yml');
});
function dockerExec(path) {
    const dockerCommand = 'docker-compose -f ' + path + ' up -d';
    (0, child_process_1.exec)(dockerCommand, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
        console.log(stdout);
    });
}
//# sourceMappingURL=electron.js.map