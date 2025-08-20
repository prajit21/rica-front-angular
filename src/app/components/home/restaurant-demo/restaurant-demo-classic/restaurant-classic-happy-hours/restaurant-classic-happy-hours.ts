import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-classic-happy-hours',
  templateUrl: './restaurant-classic-happy-hours.html',
  styleUrls: ['./restaurant-classic-happy-hours.scss'],
  imports: [RouterLink],
})
export class RestaurantClassicHappyHours {
  public seconds: number;
  public interval: ReturnType<typeof setInterval>;

  constructor() {
    this.interval = setInterval(() => {
      let currentDate = new Date();
      currentDate.setHours(0); // Set the desired hours
      currentDate.setMinutes(0); // Set the desired minutes
      currentDate.setSeconds(0);

      let nowDate = new Date();
      let daysToAdd = 7;

      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();

      document.querySelectorAll<HTMLElement>('#days').forEach(element => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      });

      document.querySelectorAll<HTMLElement>('#hours').forEach(element => {
        element.innerHTML = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ).toString();
      });

      document.querySelectorAll<HTMLElement>('#minutes').forEach(element => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      });

      document.querySelectorAll<HTMLElement>('#seconds').forEach(element => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000).toString();
      });
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
