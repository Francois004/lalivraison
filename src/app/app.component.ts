import { Component } from '@angular/core';
import {Restos} from '../app/mock-restos';
import {Resto} from '../app/resto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  restaurants:Resto[]=Restos;


}
