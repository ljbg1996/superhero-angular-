import { Injectable } from '@angular/core';
import { AttackType } from '../../enum/attackEnum';
import { Superhuman } from 'src/app/interfaces/superhuman';

@Injectable({
  providedIn: 'root'
})
export class AttackService {

  constructor() {

  }

  performAttack(attacker: Superhuman, defender: Superhuman, attackType: AttackType) {
    let damage = 0;

    switch (attackType) {
      case AttackType.INTELLIGENCE:
        console.log(attacker.intelligence + ' vs ' + defender.intelligence);
        damage = (attacker.intelligence !== undefined
                  ? attacker.intelligence
                  : 0)
               - (defender.intelligence !== undefined
                  ? defender.intelligence
                  : 0);
        break;
      case AttackType.POWER:
        console.log(attacker.power + ' vs ' + defender.power);
        damage = (attacker.power !== undefined
                  ? attacker.power
                  : 0)
               - (defender.power !== undefined
                  ? defender.power
                  : 0);
        break;
      case AttackType.STRENGTH:
        damage = (attacker.strength !== undefined
                  ? attacker.strength
                  : 0)
               - (defender.strength !== undefined
                  ? defender.strength
                  : 0);
        break;
    }

    return damage < 0 ? 0 : damage;
  }
}
