import {Component} from '@angular/core';
import {Child} from './child/child';

@Component({
  selector: 'app-task9',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [Child],
})
export class Task9 {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}

