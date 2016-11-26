module.exports = function(app) {
  //Function for checking the file type..
  app.dataSources.container.connector.getFilename = function(file, req, res) {

    //First checking the file type..
    var pattern = /^image\/.+$/;
    var value = pattern.test(file.type);
    if(value ){
      var arrayFileName = file.name.split('.');
      var fileExtension = arrayFileName.pop();
      var currentFileName = arrayFileName.join('.');
      var container = file.container;
      var time = new Date().getTime();

      //Now preparing the file name..
      //customerId_time_orderId.extension
      var NewFileName = '' + currentFileName + '_' + time +  '.' + fileExtension;

      //And the file name will be saved as defined..
      return NewFileName;
    }
    else{
      throw "FileTypeError: Only File of Image type is accepted.";
    }
  };
};
