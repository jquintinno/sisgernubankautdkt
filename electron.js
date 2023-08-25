const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {

    appWindow = new BrowserWindow({
        width: 400,
        height: 200,
        transparent: false,
        frame: false,
        roundedCorners: true,        
    });

    appWindow.loadFile('dist/sisgernubankautdkt/index.html');

    appWindow.on('closed', function () {
        appWindow = null
    });
    
}

app.whenReady().then(() => {
    createWindow();
});