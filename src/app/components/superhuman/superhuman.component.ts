import { Input, Component, OnInit, Output, EventEmitter, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { Superhuman } from "../../interfaces/superhuman";
import { SuperhumanService } from "../../services/superhumanService/superhuman.service";
import { AttackType } from 'src/app/services/enum/attackEnum';

@Component({
  selector: 'app-superhuman',
  templateUrl: './superhuman.component.html',
  styleUrls: ['./superhuman.component.scss']
})

export class SuperhumanComponent implements OnInit, OnChanges{

  // Get superhuman
  @Input() superhumanId: number = 0;
  superhumanFromServer: Superhuman = { name : '' };

  // Show three buttons for fighting
  @Input() showButtons: boolean = false;
  // intelligenceButton: any;
  // powerButton: any;
  // strengthButton: any;

  // For buttons in fighting
  @Input() isDisabled: boolean = true;

  // Superhuman fotos size
  imageSizeMultiplier: number = 1;

  constructor(private supService: SuperhumanService) {
  }

  ngOnInit(): void {
    this.supService.getById(this.superhumanId).subscribe(superhuman => {
      this.superhumanFromServer = superhuman;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.supService.getById(this.superhumanId).subscribe(superhuman => {
      this.superhumanFromServer = superhuman;
    });
  }

  // Fighting logic
  @Output() attackEvent = new EventEmitter<AttackType>();

  intelligenceFight() {
    this.attackEvent.emit(AttackType.INTELLIGENCE);
  }
  powerFight() {
    this.attackEvent.emit(AttackType.POWER);
  }
  strengthFight() {
    this.attackEvent.emit(AttackType.STRENGTH);
  }
}
