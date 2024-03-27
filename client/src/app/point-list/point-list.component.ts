import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.scss'],
})
export class PointListComponent implements OnInit {
  points: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/points_history').subscribe(data => {
      console.log(data)
      this.points = data;
    });
  }
}
