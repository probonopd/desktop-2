'use strict';

const builder = require('electron-builder');
const Platform = builder.Platform;
const args = require('minimist')(process.argv.slice(2));

let target;
switch (args['target']) {
  case 'mac':
    target = Platform.MAC.createTarget();
    break;
  case 'windows':
    target = Platform.WINDOWS.createTarget();
    break;
  case 'linux':
    target = Platform.LINUX.createTarget();
    break;
  default:
    // eslint-disable-next-line no-throw-literal
    throw 'Specify target platform, e.g. --target=mac';
}

builder.build({
  targets: target,
  config: {
    'appId': 'com.doorsock.desktop-client',
    'productName': 'Doorsock',
    'copyright': 'Copyright © 2019 Daniel Fridkin',

    'mac': {
      'category': 'public.app-category.productivity',
      'target': 'dmg',
      'artifactName': 'Doorsock.${ext}',
    },

    'linux': {
      'target': 'appImage',
      'category': 'Utility',
      'executableName': 'doorsock',
      'icon': 'build/icons',
    },
    'appImage': {
      'license': 'build/license_en.txt',
      'synopsis': 'Unified Do-Not-Disturb',
      'artifactName': 'Doorsock.${ext}',
      'desktop': {
        'Name': 'Doorsock',
        'Icon': 'doorsock',
        'Type': 'Application',
        'Categories': 'GTK;GNOME;Utility;',
      },
    },

    'win': {
      'target': 'nsis',
    },
    'nsis': {
      'allowToChangeInstallationDirectory': true,
      'license': 'build/license_en.txt',
      'oneClick': false,
      'artifactName': 'Doorsock Setup.${ext}',
    },
  },
})
    .then(() => {
    // handle result
      console.log('Build OK!');
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
