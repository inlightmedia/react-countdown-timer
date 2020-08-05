'use strict';
const path = require('path');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  process(_src: any, filename: any, _config: any, _options: any) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  }
};
