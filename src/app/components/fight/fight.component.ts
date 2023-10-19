import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { SuperhumanService } from 'src/app/services/superhumanService/superhuman.service';
import { AttackType } from 'src/app/services/enum/attackEnum';
import { AttackService } from 'src/app/services/fights/attackService/attack.service';
import { Superhuman } from 'src/app/interfaces/superhuman';
import { Router } from "@angular/router";
import { Input } from '@angular/core';
import { SuperhumanComponent } from '../superhuman/superhuman.component';


@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})

export class FightComponent {
  showFightButton: boolean = true;
  attackerButtonIsValid: boolean = false;

  superhumans!: Superhuman[];
  @Input() selectedAttackerId: number = 1;
  @Input() selectedDefenderId: number = 1;

  currentAttacker: string = 'superhumanName';

  attacker: any;
  defender: any;

  constructor(private router: Router,
              private supService: SuperhumanService,
              private attackService: AttackService) {

    this.updateAttackerAndDefender();
  }

@Input()
get selectAttackerId(): number {
  return this.selectedAttackerId;
}

set selectAttackerId(value: number) {
  if (this.selectedAttackerId !== value) {
    this.selectedAttackerId = value;
    console.log(value);
    this.updateAttackerAndDefender();
  }
}

get selectDefenderId(): number {
  return this.selectedDefenderId;
}

set selectDefenderId(value: number) {
  if (this.selectedDefenderId !== value) {
    this.selectedDefenderId = value;
    console.log(value);
    this.updateAttackerAndDefender();
  }
}

  ngOnInit(): void {
    this.supService.getSuperhumans().subscribe(superhumans => {
      this.superhumans = superhumans;
    });
  }

  startFight() {
    this.showFightButton = false;
  }

  updateAttackerAndDefender() {
    this.supService.getByIds(this.selectedAttackerId, this.selectedDefenderId)
      .subscribe(([attackerSuperhuman, defenderSuperhuman]) => {
        this.attacker = attackerSuperhuman;
        this.defender = defenderSuperhuman;
        this.currentAttacker = this.attacker.name;
      });
  }

  performAttack(attackType: any) {
    let damage = -1;
    if (this.currentAttacker === this.attacker.name) {
      damage = this.attackService.performAttack(this.attacker, this.defender, attackType);
      this.defender.healthMax -= damage;
      this.currentAttacker = this.defender.name;
      if (damage === 0) {
        console.log('Poor gay, i am the god');
      }
      console.log('----- : ' + this.defender.healthMax + '  === > ' + this.currentAttacker);
    } else {
      damage = this.attackService.performAttack(this.defender, this.attacker, attackType);
      this.attacker.healthMax -= damage;
      this.currentAttacker = this.attacker.name;
      if (damage === 0) {
        console.log('Poor gay, i am the god');
      }
      console.log('!---- : ' + this.attacker.healthMax + '  === > ' + this.currentAttacker);
    }

    if(this.currentAttacker !== this.attacker.name) {
      this.attackerButtonIsValid = true;
    } else {
      this.attackerButtonIsValid = false;
    }
    this.checkForWinner();
  }

  checkForWinner() {
    if (this.attacker.healthMax <= 0) {
      this.endAndRestart(this.defender.name);
      console.log('Winner: ' + this.defender.name);
    }

    if (this.defender.healthMax <= 0) {
      this.endAndRestart(this.attacker.name);
      console.log('Winner: ' + this.attacker.name);
    }
  }

  endAndRestart(winner: string) {
    window.alert('Superhuman ' + winner + ' is won!');
    this.router.navigate(['/fight']);
  }

}
