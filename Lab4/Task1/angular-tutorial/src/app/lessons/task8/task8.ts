import {Component, input} from '@angular/core';

@Component({
  selector: 'app-task8',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class Task8 {
  readonly name = input<string>();
}
