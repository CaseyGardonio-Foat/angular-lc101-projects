import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = 'Class 18 Exercises';
  /*double check that this is in the right place--before or after the constructor?*/
  constructor() { }

  ngOnInit() {
  }

}
