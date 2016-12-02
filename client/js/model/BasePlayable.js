/**
 * Created by jadoux on 28/10/2016.
 */

class BasePlayable {
  constructor(id, name, level, pictureUrl) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.pictureUrl = pictureUrl || 'img/profile-pics/1.jpg';
    this._initiativeResult = 0;
    this._initiative = 0;
    this._overInitiative = 0;
    this._isCurrentPlayer = false;
    this.effectOwner = [];
    this.effectTarget = [];
    this.onInitiativeChange = false;
    this.size = 1;
    this.inGrid = false;
  }

  set isCurrentPlayer(isCurrentPlayer) {
    this._isCurrentPlayer = isCurrentPlayer;
  }

  set initiativeResult(initiativeResult) {
    this._initiativeResult = initiativeResult;
  }

  set initiative(initiative) {
    this._initiative = initiative;
  }

  set overInitiative(overInitiative) {
    this._overInitiatives = overInitiative;
  }

  get overInitiative() {
    if(this._overInitiatives == 0) {
      this.sendOverInitiative();
    }

    return this._overInitiatives;
  }

  get isCurrentPlayer() {
    return this._isCurrentPlayer;
  }

  get initiativeResult() {
    return this._initiativeResult;
  }

  get initiative() {
    return this._initiative;
  }

  setCallbackOnInitiativeChange(callback) {
    this.onInitiativeChange = callback
  }

  isPnj() {
    return (this instanceof BaseMob);
  }

  sendOverInitiative() {
    this._overInitiatives = d20.roll("1d1000");
  }

  createGridObject(posx, posy, grid, callback) {
    if(!this.inGrid) {
      this.inGrid = true;
      var obj = new BaseObjectPlayableGrid(this, function() {
        obj.fabricObj.set({
          left: Math.floor(posx / grid) * grid,
          top: Math.floor(posy / grid) * grid
        });

        callback(obj.fabricObj);
      });
    } else {
      callback(false);
    }
  }
}
