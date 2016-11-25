module.exports = function(Rencontre) {
  Rencontre.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.authorId = req.accessToken.userId;
    next();
  });
};
