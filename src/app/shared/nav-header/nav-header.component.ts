import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isCollapsed: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
     this.isCollapsed = !this.isCollapsed;
   }

}
