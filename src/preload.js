const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('nexBrowser', {
  reconnect: () => ipcRenderer.invoke('reconnect'),
});
