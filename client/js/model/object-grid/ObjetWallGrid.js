class ObjetWallGrid extends BaseObjectMapGrid {
  constructor() {
    super();

    this.name = "Mur";
    this.pictureUrl = 'img/profile-pics/1.jpg';
    this.fabricObj = false;
  }

  wallObjectFabric() {
    return {
      width: 50,
      height: 50,
      originX: 'left',
      originY: 'top',
      hasRotatingPoint: false,
      fill: '#B6EDBC',
      opacity: 0.7,
      content: this
    };
  }

  moveAction(grid) {
    /*if(this.fabricObj) {
      var nbCol = Math.round(this.fabricObj.left / grid) * grid;
      var nbLine = Math.round(this.fabricObj.top / grid) * grid;
      var nbColCenter = nbCol + (grid / 2);
      var nbLineCenter = nbLine + (grid / 2);

      var left = 0;
      var top = 0;

      if((this.fabricObj.left + this.fabricObj.width) <= nbColCenter) {
        left = nbCol;
      } else {
        left = (nbCol + grid) - this.fabricObj.width;
      }

      if((this.fabricObj.top + this.fabricObj.height)  <= nbLineCenter) {
        top = nbLine;
      } else {
        top = nbLine + grid - this.fabricObj.height;
      }

      this.fabricObj.set({
        left: left,
        top: top
      });
    }*/
  }

  createGridObject(posx, posy, grid, callback) {
    let origProto = Object.getPrototypeOf(this);
    let clone =  Object.assign(Object.create(origProto), this);

    clone.fabricObj = new fabric.Rect(clone.wallObjectFabric());
    clone.fabricObj.set({
      left: Math.floor(posx / grid) * grid,
      top: Math.floor(posy / grid) * grid
    });

    callback(clone.fabricObj);
  }
}
