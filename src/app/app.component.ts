import { Component } from '@angular/core';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  eachQuarterOfInterval,
  lastDayOfQuarter,
  format
} from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thisWeekStartsDate;
  thisWeekEndDate;
  thisMonthStartDate;
  thisMonthEndDate;
  thisYearEndDate;
  thisYearStartDate;
  currentYearQuarters;

  /**
   * Gets this week's start date
   */
  getThisWeekStartDate(): void {
    this.thisWeekStartsDate = startOfWeek(new Date(), {weekStartsOn: 1});
    this.thisWeekStartsDate = format(this.thisWeekStartsDate, 'MM/dd/yyyy');
  }


  /**
   * Gets this week's end date
   */
  getThisWeekEndDate(): void {
    this.thisWeekEndDate = endOfWeek(new Date());
  }


  /**
   * Gets this  month's start date
   */
  getThisMonthStartDate(): void {
    this.thisMonthStartDate = startOfMonth(new Date());
  }

  /**
   * Gets this month's end date
   */
  getThisMonthEndDate(): void {
    this.thisMonthEndDate = endOfMonth(new Date());
  }


  /**
   * Gets this  year's start date
   */
  getThisYearStartDate(): void {
    this.thisYearStartDate = startOfYear(new Date());
  }

  /**
   * Gets this year's end date
   */
  getThisYearEndDate(): void {
    this.thisYearEndDate = endOfYear(new Date());
  }


  /**
   * Get this current year quarters
   */
  getCurrentYearQuarters(): void {
    // Setting values
    this.getThisYearStartDate();
    this.getThisYearEndDate();
    this.currentYearQuarters = eachQuarterOfInterval({
      start: this.thisYearStartDate,
      end: this.thisYearEndDate
    });
  }


  /**
   * Gets last day of quarter
   */
  getLastDayOfQuarter(date: Date): Date {
    return lastDayOfQuarter(date);
  }
}
