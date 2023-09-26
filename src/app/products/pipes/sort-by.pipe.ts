import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | '', asc: boolean = false): Hero[] {
    const direction: any = asc ? { first: 1, second: -1 } : { first: -1, second: 1 };
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name) ? direction.first : direction.second);
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly) ? direction.first : direction.second);
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? direction.first : direction.second);
      default:
        return heroes;
    }
  }
}
