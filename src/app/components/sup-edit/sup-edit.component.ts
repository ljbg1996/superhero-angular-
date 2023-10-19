import { Component, OnInit } from '@angular/core';
import { Superhuman } from "../../interfaces/superhuman";
import { ActivatedRoute, Router } from "@angular/router";
import { SuperhumanService } from "../../services/superhumanService/superhuman.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sup-edit',
  templateUrl: './sup-edit.component.html',
  styleUrls: ['./sup-edit.component.scss']
})
export class SupEditComponent implements OnInit {
  submitted: boolean = false;

  supForm: FormGroup;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private supService: SuperhumanService,
    private fb: FormBuilder) {
    // let id: number = Number(this.router.snapshot.paramMap.get('id'));
    // this.sup = supService.getById(id)《

    this.supForm = this.fb.group({
      name: ['', Validators.required],
      strength: [null],
      intelligence: [null],
      power: [null],
      story: [null],
      healthMax: [null],
      shieldMax: [null],
      currentDamage: [null],
      powerType: [null],
      heroType: [null],
      dead: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.supForm.valid) {
      const superhumanValueFormBrowers = this.supForm.value;
      const newSuperhuman = {
        name: superhumanValueFormBrowers.name,
        strength: superhumanValueFormBrowers.strength !== null
          ? superhumanValueFormBrowers.strength
          : 1,
        intelligence: superhumanValueFormBrowers.intelligence !== null
          ? superhumanValueFormBrowers.intelligence
          : 1,
        power: superhumanValueFormBrowers.power !== null
          ? superhumanValueFormBrowers.power
          : 1,
        story: superhumanValueFormBrowers.story !== null
          ? superhumanValueFormBrowers.story
          : 'kkk',
        healthMax: superhumanValueFormBrowers.healthMax !== null
          ? superhumanValueFormBrowers.healthMax
          : 1,
        shieldMax: superhumanValueFormBrowers.shieldMax !== null
          ? superhumanValueFormBrowers.shieldMax
          : 1,
        currentDamage: superhumanValueFormBrowers.currentDamage !== null
          ? superhumanValueFormBrowers.currentDamage
          : 1,
        powerType: superhumanValueFormBrowers.powerType !== null
          ? superhumanValueFormBrowers.powerType
          : 'LEADER',
        heroType: superhumanValueFormBrowers.heroType !== null
          ? superhumanValueFormBrowers.heroType
          : 'HERO',
        dead: superhumanValueFormBrowers.dead !== null
          ? superhumanValueFormBrowers.dead
          : false
      };
      this.supService.addSuperhuman(newSuperhuman).subscribe(
        response => {
          if (response.status === 200) {
            console.log('Superhuman is successful added!');
            console.log(this.supForm.getRawValue());
          }
        });
      window.alert('Superhuman is successful added!');
      this.router.navigate(['/list']);
    }
  }
}
