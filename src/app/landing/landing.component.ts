import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-landing',
  templateUrl:'./landing.component.html',
  styleUrls: ['./landing.component.css'  ]
})
export class LandingComponent implements OnInit {

  email:string="assets/images/email.png";
  phone:string="assets/images/phone.png";
  redirect:string="assets/images/redirect.png";
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
console.log('h');
  }
}
