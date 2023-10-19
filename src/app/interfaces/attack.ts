import { AttackType } from "../services/enum/attackEnum";

export interface Attack {
  trait: AttackType,
  damage: number,
  isAttacker: boolean
}
