import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  profile_pic:string="assets/images/P.jpg";
  logo:string="assets/images/download.png";
  
  
  
  constructor() {
    
  }
 
 
  
}
