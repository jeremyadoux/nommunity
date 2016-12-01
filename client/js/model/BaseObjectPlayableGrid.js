/**
 * Created by jadoux on 29/11/2016.
 */
class BaseObjectPlayableGrid {
   constructor(obj, readyCallback) {
     var vm = this;

     this.obj = obj;


     fabric.Image.fromURL(obj.pictureUrl, function(oImg) {
       oImg.set({
         hasControls: false,
         hasRotatingPoint: false,
         width: 50,
         height: 50,
         clipTo: function (ctx) {
           ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
         },
         content: this
       });

       vm.fabricObj = oImg;
       readyCallback();
     });
   }
}
