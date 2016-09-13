(function() {
  'use strict';

  angular.module('app')
    .service('messageService', messageService);

  messageService.$inject = ['$resource'];
  
  function messageService($resource){
    this.getMessage = function(img, user, text) {
      var gmList = $resource("data/messages-notifications.json");

      return gmList.get({
        img: img,
        user: user,
        text: text
      });
    }
  }
})();
