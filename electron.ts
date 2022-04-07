// const path = require('path');
// import path from 'path';
// import * as path from 'path';
// import module from 'path';
// import  { app, ipcMain, Menu }  from 'electron';
// import  { exec } from 'child_process';
// import * as configGenerator from './configs/configGenerator';
import { app, ipcMain, Menu } from 'electron';
import { exec } from 'child_process';
import configGenerator from './configs/configGenerator.js';

import MainWindow from './app/MainWindow.jsx';
import PopupWindow from './app/PopupWindow.jsx';
import MetricTray from './app/MetricTray.jsx';
// const MainWindow = require('./app/MainWindow.jsx');
// const PopupWindow = require('./app/PopupWindow.jsx');
// const MetricTray = require('./app/MetricTray.jsx');

// let mainWindow: prototype;
let mainWindow: null | typeof MainWindow;
let popupWindow: null | typeof PopupWindow;
let tray: null | typeof MetricTray;

app.on('ready', () => {
  // creates main electron window using menu from template below
  mainWindow= new MainWindow(`file://${__dirname}/src/index.html`);
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
  mainWindow.on('show', () => {
    setTimeout(() => {
      mainWindow.focus();
    }, 200);
  });
  mainWindow.show();

  // creates popup window that is opened / closed when user clicks on taskbar icon
  popupWindow = new PopupWindow(`file://${__dirname}/src/popup.html`);
  const iconName =
    process.platform === 'darwin' ? 'icon-mac.png' : 'icon-windows.png';
  const iconPath = path.join(__dirname, `/src/assets/${iconName}`);
  tray = new MetricTray(iconPath, popupWindow);
});

// build app menu
const menuTemplate: {}[] = [
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

ipcMain.on('brokers:input', (_: any, brokerCount: number) => {
  if (brokerCount === 1) {
    return dockerExec('./configs/docker/docker_single_node.yml');
  }
  configGenerator(brokerCount);
  return dockerExec('./configs/docker/docker_multiple_nodes.yml');
});

function dockerExec(path: String) {
  const dockerCommand = 'docker-compose -f ' + path + ' up -d';

  exec(dockerCommand, (err: String, stdout: String, stderr: String) => {
    if (err) {
      console.log(err);
    }
    if (stderr) {
      console.log(stderr);
    }
    console.log(stdout);
  });
}
