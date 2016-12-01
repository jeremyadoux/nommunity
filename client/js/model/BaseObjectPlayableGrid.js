/**
 * Created by jadoux on 29/11/2016.
 */
class BaseObjectPlayableGrid {
   constructor(obj) {
     this.obj = obj;
     this.fabricObj = new fabric.Circle({
       left: 8,
       top: 8,
       radius: 25,
       fill: '#9f9',
       originX: 'left',
       originY: 'top',
       hasRotatingPoint: false,
       content: this
     });
   }
}
