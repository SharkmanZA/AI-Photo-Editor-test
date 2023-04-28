const { app, BrowserWindow } = require("electron");
const path = require("path");

require("electron-reload")(__dirname + "/public/build/bundle.js", {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
    },
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();
});