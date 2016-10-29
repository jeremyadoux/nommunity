/**
 * Created by jadoux on 28/10/2016.
 */

class BasePlayable {
  constructor(name) {
    this.name = name;
    this.initiativeResult = 0;
    this.initiative = 0;
    this.overInitiative = 0;
    this.isCurrentPlayer = false;
    this.effectOwner = [];
    this.effectTarget = [];
  }
}
