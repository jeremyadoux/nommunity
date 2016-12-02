/**
 * Created by jadoux on 29/11/2016.
 */
class BaseObjectPlayableGrid {
   constructor(obj, readyCallback) {
     var vm = this;

     this.fabricObj = false;
     this.obj = obj;

     fabric.Image.fromURL(obj.pictureUrl, function(oImg) {
       oImg.set({
         hasControls: false,
         hasRotatingPoint: false,
         width: (50 * vm.obj.size),
         height: (50 * vm.obj.size),
         clipTo: function (ctx) {
           ctx.arc(0, 0, (50 * vm.obj.size) /  2, 0, Math.PI * 2, true);
         },
         content: vm
       });

       vm.fabricObj = oImg;
       readyCallback();
     });
   }

   moveAction(grid) {
     this.fabricObj.set({
       left: Math.round(this.fabricObj.left / grid) * grid,
       top: Math.round(this.fabricObj.top / grid) * grid
     });
   }
}
