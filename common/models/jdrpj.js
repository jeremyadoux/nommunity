var currentGpioOpened;
var currentWarnGpio = {
  id: 0,
  timer: null,
  timeout: null
};

module.exports = function(Jdrpj) {
  Jdrpj.currentPlayer = function(JdrpjId, cb) {
    Jdrpj.findById( JdrpjId, function (err, instance) {
      console.log(instance.gpio);
      console.log(global.gpioListOpened[instance.gpio]);
      if(typeof global.gpioListOpened[instance.gpio] != "undefined") {
        global.gpioListOpened[instance.gpio].set();
        currentGpioOpened = instance.gpio;
      }

      cb(null, 'ok sending');
    });
  };

  Jdrpj.nextPlayer = function(JdrpjId, cb) {
    Jdrpj.findById( JdrpjId, function (err, instance) {
      if(typeof global.gpioListOpened[instance.gpio] != "undefined") {
        currentWarnGpio.id = instance.gpio;
        currentWarnGpio.timer = setInterval(function(gpio) {
          gpio.set();
          currentWarnGpio.timeout = setTimeout(function(gpio) { gpio.reset(); }, 500, gpio);
        }, 1000, global.gpioListOpened[instance.gpio]);
      }
      cb(null, 'ok sending');
    });
  };

  Jdrpj.resetAll = function(cb) {
    if(currentGpioOpened != null) {
      global.gpioListOpened[currentGpioOpened].reset();
    }

    if(currentWarnGpio.timer != null) {
      global.gpioListOpened[currentWarnGpio.id].reset();
      clearInterval(currentWarnGpio.timer);
      clearTimeout(currentWarnGpio.timeout);
    }

    cb(null, 'ok sending');
  };

  Jdrpj.remoteMethod(
    'currentPlayer',
    {
      accepts: {arg: 'id', type: 'string', required: true},
      http: {path: '/:id/currentPlayer', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
  Jdrpj.remoteMethod(
    'nextPlayer',
    {
      accepts: {arg: 'id', type: 'string', required: true},
      http: {path: '/:id/nextPlayer', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
  Jdrpj.remoteMethod(
    'resetAll',
    {
      http: {path: '/reset-all-gpio', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
};
