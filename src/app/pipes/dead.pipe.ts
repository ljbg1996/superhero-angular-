import { Pipe, PipeTransform } from '@angular/core';
import { Superhuman } from '../interfaces/superhuman';

@Pipe({
  name: 'dead'
})
export class DeadPipe implements PipeTransform {

  transform(superhumans: Superhuman[]): Superhuman[] {
    return superhumans.filter(superhumans => superhumans.dead);
  }

}
