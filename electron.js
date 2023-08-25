const { app, BrowserWindow, screen } = require('electron');

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

    setTimeout(() => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;
        const windowWidth = 600;
        const windowHeight = 350;
        const x = Math.floor((width - windowWidth) / 2);
        const y = Math.floor((height - windowHeight) / 2);
        appWindow.setSize(windowWidth, windowHeight);
        appWindow.setPosition(x, y);
    }, 6000);

    appWindow.on('closed', function () {
        appWindow = null
    });
    
}

app.whenReady().then(() => {
    createWindow();
});