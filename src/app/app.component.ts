import { Component } from '@angular/core';
import { startOfWeek, endOfWeek } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thisWeekStartsDate;
  thisWeekEndDate;


  /**
   * Gets this week's start date
   */
  getThisWeekStartDate(): void {
    this.thisWeekStartsDate = startOfWeek(new Date(), {weekStartsOn: 1});
  }


  /**
   * Gets this week's end date
   */
  getThisWeekEndDate(): void {
    this.thisWeekEndDate = endOfWeek(new Date());
  }
}
