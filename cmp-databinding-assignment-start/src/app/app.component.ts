import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainCounter: number = 0
  evenNums: number[] = [];
  oddNums: number[] = [];
  doCount(childCounter: {numero: number}){
    this.mainCounter = this.mainCounter + childCounter.numero;    
    if (this.mainCounter % 2 == 0) this.evenNums.push(this.mainCounter);
    else this.oddNums.push(this.mainCounter);
  }
}
