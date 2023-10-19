import { Component, OnInit } from '@angular/core';
import { Superhuman } from "../../interfaces/superhuman";
import { SuperhumanService } from "../../services/superhumanService/superhuman.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sup-list',
  templateUrl: './sup-list.component.html',
  styleUrls: ['./sup-list.component.scss']
})
export class SupListComponent implements OnInit {

  superhumans: Superhuman[] = [];
  //showDeadSuperhumans: boolean;
  showDeadSuperhumans: number;
  superhumenFromServer$: Observable<Superhuman[]>;

  constructor(private supService: SuperhumanService) {
    this.supService.getSuperhumans().subscribe(data => {
      this.superhumans = data;
      console.log(data);
    });
    this.showDeadSuperhumans = 0;
    this.supService.getSuperhumans().subscribe(data =>
      console.log(data)
    );
    // $:::damit weiß man , dass superhumenFromServer ein Observable ist.
    this.superhumenFromServer$ = this.supService.getSuperhumans();
  }

  ngOnInit(): void {

  }

  filterDeadSuperhumans(): void {
    this.showDeadSuperhumans++;
  }

  superhumanToShow(): Superhuman[] {
    return this.showDeadSuperhumans % 2 === 0
      ? this.superhumans.filter(superhuman => superhuman.dead)
      : this.superhumans.filter(superhuman => !superhuman.dead);
  }

  getAllSuperhumen(): Superhuman[] {
    return this.superhumans;
  }
}
