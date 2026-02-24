import {Component} from '@angular/core';
import {User} from './user/user';

@Component({
  selector: 'app-task3',
  standalone: true,
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [User],
})
export class Task3 {}

