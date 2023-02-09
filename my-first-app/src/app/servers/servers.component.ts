import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // styleUrls: ['./servers.component.css']
  styles: [`
    .paintedLog {
      color: purple;
      backgroundColor: blue;     
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName  = 'Test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']
  hiddenParagraph = false;
  itemCount = 0;
  logArray = [];
  paintLog = false;
  cutOffDate = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  toggleParagraph(){
    this.hiddenParagraph = !this.hiddenParagraph;
    this.itemCount ++;
    let currentDate = Date.now()
    this.logArray.push(currentDate);
    if (this.itemCount > 4) this.paintLog = true;
    else this.cutOffDate = currentDate;
  }
}
