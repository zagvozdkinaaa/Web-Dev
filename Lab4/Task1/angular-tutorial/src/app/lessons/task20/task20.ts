import {Component, inject} from '@angular/core';
import {CarService} from './car-service/car-service';

@Component({
  selector: 'app-task20',
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class Task20 {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
