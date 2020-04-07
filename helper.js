const util = require('util');

module.exports.print = function (data) {
  console.log(util.inspect(data, {
    depth: null,
    compact: true,
    colors: true
  }));
};

module.exports.println = function (data) {
  console.log(util.inspect(data, {
    depth: null,
    compact: false,
    colors: true
  }));
};
