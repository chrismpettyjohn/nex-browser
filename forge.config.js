module.exports = {
  packagerConfig: {
    protocols: [
      {
        name: 'nex-protocol',
        schemes: 'nex',
      },
    ],
    appCategoryType: 'public.app-category.games',
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://nexhotel.net/img/browser-icons/nex.ico',
        setupIcon: 'icons/setup.ico',
        loadingGif: 'icons/setup-splash.gif',
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
