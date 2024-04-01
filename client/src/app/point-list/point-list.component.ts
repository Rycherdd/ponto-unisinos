import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.scss'],
})
export class PointListComponent implements OnInit {
  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  points: any = [];
  daysOfCurrentMonth: any = [];
  currentMonthIndex: number = new Date().getMonth();
  currentMonth: string = this.months[this.currentMonthIndex];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/points_history').subscribe(data => {
      console.log(data)
      this.points = data;
    });

    this.daysOfCurrentMonth = this.getAllDaysOfMonth(this.currentMonthIndex)
  }

  getAllDaysOfMonth(month: number): string[] {
    const date = new Date();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let daysOfMonth: any = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(year, month, i);
      daysOfMonth.push({
        date: day.toLocaleDateString(),
        weekDay: day.toLocaleDateString('pt-BR', {weekday: 'long'}),
        registered: "Registrado"
      });
    }

    return daysOfMonth;
  }

  moveMonth(direction: string) {
    let month = this.currentMonthIndex;

    (direction === 'next') ? month += 1 : month -= 1

    if (month < 0 || month > 11) return;

    this.currentMonthIndex = month;
    this.currentMonth = this.months[this.currentMonthIndex];
    this.daysOfCurrentMonth = this.getAllDaysOfMonth(this.currentMonthIndex)
  }

}
