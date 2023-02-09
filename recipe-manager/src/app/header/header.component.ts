import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() itemSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: string){
    this.itemSelect.emit(item);
  }
}
