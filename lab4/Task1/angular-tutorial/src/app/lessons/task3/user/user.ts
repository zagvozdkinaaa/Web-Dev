import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}
