import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  //Exam#: 4121016121
  private username = 'Administrator'
  constructor() { }

  ngOnInit() {
  }

}
