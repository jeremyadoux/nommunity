var CONTAINERS_URL = '/api/Containers/';
module.exports = function(Picture) {
  Picture.upload = function (ctx,options,cb) {
    if(!options) options = {};
    ctx.req.params.container = 'images';
    Picture.app.models.Container.upload(ctx.req,ctx.result,options,function (err,fileObj) {
      if(err) {
        cb(err);
      } else {
        var fileInfo = fileObj.files.file[0];
        Picture.create({
          name: fileInfo.name,
          type: fileInfo.type,
          container: fileInfo.container,
          url: CONTAINERS_URL+fileInfo.container+'/download/'+fileInfo.name
        },function (err,obj) {
          if (err !== null) {
            cb(err);
          } else {
            cb(null, obj);
          }
        });
      }
    });
  };

  Picture.remoteMethod(
    'upload',
    {
      description: 'Uploads a picture',
      accepts: [
        { arg: 'ctx', type: 'object', http: { source:'context' } },
        { arg: 'options', type: 'object', http:{ source: 'query'} }
      ],
      returns: {
        arg: 'fileObject', type: 'object', root: true
      },
      http: {verb: 'post'}
    }
  );

};
