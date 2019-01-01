import { Component, OnInit } from '@angular/core';
import { NavHeaderService } from './nav-header.service'
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isMainCollapsed: Boolean = true;
  isMenMenuCollapsed: Boolean = true;
  toggleBar = 'colapseMenuBar';
  constructor( private navHeaderService: NavHeaderService) { }

  ngOnInit() {
  }
  toggleMainMenu() {
    this.isMainCollapsed = !this.isMainCollapsed;
  }
  registerDialog()   {
    this.navHeaderService.dialogOpen();
  }
  toggleMenMenu() {
    this.isMenMenuCollapsed = !this.isMenMenuCollapsed;
  }
  collapseMenu() {
    this.toggleBar = this.toggleBar === 'colapseMenuBar' ? 'expandMenuBar' : 'colapseMenuBar';
  }

}
