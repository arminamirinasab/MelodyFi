const {app, BrowserWindow, Menu} =  require("electron");
let mainWindow;

function appStart() {
  mainWindow = new BrowserWindow({
    title : "MelodyFi",
    minHeight : 600,
    minWidth: 400,
    height: 700,
    width: 450,
    icon: __dirname + "/app/icon.png",
    resizable: false
  });

  let mainMenu = new Menu();
  Menu.setApplicationMenu(mainMenu)

  mainWindow.loadFile(__dirname + "/app/index.html");
}

app.on("ready" , appStart);