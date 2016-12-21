'use strict';

module.exports = function(Story) {
  Story.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.authorId = req.accessToken.userId;
    next();
  });
};
