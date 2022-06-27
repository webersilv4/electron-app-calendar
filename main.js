const { app, BrowserWindow, ipcMain } = require('electron');
const ipc = ipcMain;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 600,
        minWidth: 800,
        show: false,
        frame: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });


    ipcMain.on(`minimizeBtn`, function(e, args) {
        win.minimize();
    });

    ipcMain.on(`maxUnmaxBtn`, function(e, args) {
        if (win.isMaximized())
            win.restore();
        else
            win.maximize();
    });

    ipcMain.on(`closeApp`, function(e, args) {
        win.close();
    });

    win.loadFile('./src/index.html');

    win.once('ready-to-show', () => {
        win.show();
    });
};

app.on('ready', createWindow);