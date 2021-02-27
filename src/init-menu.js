const { dialog, Menu, session } = require('electron');
const settings = require('./settings');

const getToggleBlurryFixLabel = () => {
  const blurryClientFixEnabled = settings.get('enableBlurryClientFix');
  return `Turn blurry fix ${blurryClientFixEnabled ? 'off' : 'on'}`;
};

const createMenu = () => {
  return Menu.buildFromTemplate([
    {
      label: 'Nex',
      submenu: [
        {
          label: 'Reload',
          click: (menuItem, browserWindow) => {
            browserWindow.reload();
          },
        },
        {
          label: 'Clear cache',
          click: async () => {
            await session.defaultSession.clearCache();
            await dialog.showMessageBox({
              message: 'The cache has been cleared, please reload',
            });
          },
        },
      ],
    },
    {
      label: 'Settings',
      submenu: [
        {
          label: getToggleBlurryFixLabel(),
          click: async () => {
            settings.set(
              'enableBlurryClientFix',
              !settings.get('enableBlurryClientFix'),
            );

            settings.save();

            updateMenu();

            await dialog.showMessageBox({
              message:
                'Please restart Nex Browser for the change to take effect',
            });
          },
        },
      ],
    },
    {
      label: 'Development',
      submenu: [
        {
          label: 'Open DevTools',
          click: (menuItem, browserWindow) => {
            browserWindow.webContents.openDevTools();
          },
        },
      ],
    },
  ]);
};

const updateMenu = () => {
  const menu = createMenu();
  Menu.setApplicationMenu(menu);
};

module.exports = updateMenu;
