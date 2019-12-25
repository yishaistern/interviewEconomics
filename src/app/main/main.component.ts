import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RowData } from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }
  mainArr: RowData[] = [];
  ngOnInit() {
    this.http.get('./assets/csvjson.json').subscribe((data: RowData[]) => {
      this.mainArr = (data);
    });
  }

}
