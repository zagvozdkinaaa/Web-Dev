import {Component} from '@angular/core';

@Component({
  selector: 'app-task4',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class Task4 {
  isServerRunning = true;
}
