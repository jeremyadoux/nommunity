var gpio = require("gpio");

module.exports = function (app) {
  global.gpioListOpened = {
    "gpio4" : gpio.export(4, {
      ready: function () {
        console.log('ready')
      }
    }),
    "gpio17" : gpio.export(17, {
      ready: function () {
        console.log('ready')
      }
    }),
    "gpio27" : gpio.export(27, {
      ready: function () {
        console.log('ready')
      }
    })
  }
};
