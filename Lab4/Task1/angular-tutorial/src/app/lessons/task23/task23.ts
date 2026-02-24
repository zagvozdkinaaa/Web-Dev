import {Component} from '@angular/core';
import {ReversePipe} from './reverse-pipe/reverse-pipe';

@Component({
  selector: 'app-task23',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class Task23 {
  word = 'You are a champion';
}
