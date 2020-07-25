'use strict';
const path = require('path');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  process(src: any, filename: any, config: any, options: any) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  }
};
