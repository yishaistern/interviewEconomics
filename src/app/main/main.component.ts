import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RowData, HowToFilter } from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }
  mainArr: RowData[] = [];
  filter: HowToFilter = {
    ascending: true,
    filterBy: '',
    input: '',
    sortBy: ''
  };
  ngOnInit() {
    this.http.get('./assets/csvjson.json').subscribe((data: RowData[]) => {
      this.mainArr = (data);
    });
  }
  pickfilter($event) {
    this.filter.filterBy = $event;
  } 
  pickSort($event) {
    this.filter.sortBy = $event;
    console.log($event);
  }
  pickDirection($event) {
    if ($event) {
      this.filter.ascending = ($event === 'true') ? true : false;
    }
  }
}
