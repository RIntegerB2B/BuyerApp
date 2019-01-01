import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { NavHeaderService } from './../../shared/nav-header/nav-header.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  showIndicators = false;
  constructor(public navHeaderService: NavHeaderService) {
  }
  ngOnInit() {
  
  }
  registerDialog()   {
    this.navHeaderService.dialogOpen();
  }
}
