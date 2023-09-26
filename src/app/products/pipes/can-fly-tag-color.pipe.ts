import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyTagColor'
})

export class CanFlyTagColorPipe implements PipeTransform {
  transform(value: boolean): 'success' | 'danger' {
    return value ? 'success' : 'danger';
  }
}
