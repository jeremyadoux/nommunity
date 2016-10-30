/**
 * Created by jadoux on 28/10/2016.
 */
class BasePlayer extends BasePlayable {
  constructor(name, onChangeInitiativeCallback) {
    super(name);

    this.onChangeInitiativeCallback = onChangeInitiativeCallback || false;
  }

  set initiativeResult(initiativeResult) {
    this._initiativeResult = initiativeResult;
    if(this.onChangeInitiativeCallback) {
      this.onChangeInitiativeCallback();
    }
  }

  set initiative(initiative) {
    this._initiative = initiative;

    if(this.onChangeInitiativeCallback) {
      this.onChangeInitiativeCallback();
    }
  }

  get initiativeResult() {
    return this._initiativeResult;
  }

  get initiative() {
    return this._initiative;
  }

}
