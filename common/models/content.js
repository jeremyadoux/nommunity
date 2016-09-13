var loopback = require('loopback');

module.exports = function(Content) {
  Content.beforeRemote('create', function(context, user, next) {
    console.log('plop');
    var req = context.req;
    req.body.authorId = req.accessToken.userId;
    next();
  });

  Content.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      var context = loopback.getCurrentContext();
      var accessToken = context.get('accessToken');
      ctx.instance.authorId = accessToken.userId;
    }
    next();
  });
};
