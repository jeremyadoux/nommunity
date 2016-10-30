/**
 * Created by jadoux on 28/10/2016.
 */
class BasePlayer extends BasePlayable {
  constructor(pjObj, onChangeInitiativeCallback) {
    super(pjObj.id, pjObj.name);
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

  set isCurrentPlayer(isCurrentPlayer) {
    this._isCurrentPlayer = isCurrentPlayer;
  }

  get initiativeResult() {
    return this._initiativeResult;
  }

  get initiative() {
    return this._initiative;
  }

  get isCurrentPlayer() {
    return this._isCurrentPlayer;
  }
}
