/**
 * Created by jadoux on 28/10/2016.
 */

class BaseMob extends BasePlayable {
  constructor(pnjLoaded) {
    super(pnjLoaded.id, pnjLoaded.name);

    //Data in mod
    this.pvMod = pnjLoaded.pv;

    //Fixed Stats
    this.realName = pnjLoaded.name;
    this.level = pnjLoaded.level;
    this.initiative = pnjLoaded.initiative;
    this.perception = pnjLoaded.perception;
    this.pv = pnjLoaded.pv;
    this.ca = pnjLoaded.ca;
    this.vig = pnjLoaded.vig;
    this.reflex = pnjLoaded.reflex;
    this.volonte = pnjLoaded.volonte;
    this.move = pnjLoaded.move;
    this.experience = pnjLoaded.experience;
    this.str = pnjLoaded.str;
    this.dex = pnjLoaded.dex;
    this.sag = pnjLoaded.sag;
    this.con = pnjLoaded.con;
    this.int = pnjLoaded.int;
    this.cha = pnjLoaded.cha;
    this.immunity = pnjLoaded.immunity;
    this.resistance =  pnjLoaded.resistance;
    this.vulnerability = pnjLoaded.vulnerability;
    this.equipement = pnjLoaded.equipement;
    this.alignement  = pnjLoaded.alignement;
    this.language = pnjLoaded.language;
    this.informations = pnjLoaded.informations;
  }

  sendInitiative() {
    this.initiativeResult = d20.roll("1d20+"+this.initiative);
  }

  removePV(quantity) {
    this.pvMod -= quantity;
  }

  changePV(quantity) {
    this.pvMod += quantity;
  }

  addPV(quantity) {
    this.pvMod += quantity;
    if(this.pvMod > this.pv) {
      this.pvMod = this.pv;
    }
  }

  isPeril() {
    return (Math.floor(this.pv/2) > this.pvMod);
  }
}
