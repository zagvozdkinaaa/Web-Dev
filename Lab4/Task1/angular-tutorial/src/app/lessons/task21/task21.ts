import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-task21',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class Task21 {
  username = 'yOunGTECh';
}
