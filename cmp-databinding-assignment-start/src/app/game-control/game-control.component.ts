import { Component, ElementRef, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input() evens: number[];
  @Input() odds: number[];
  num: number = 1;
  @Output() counter = new EventEmitter<{ numero: number }>();
  inter;

  constructor() {
  }

  ngOnInit(): void {
  }

  startGame() {
    this.inter = setInterval(() => {this.counter.emit({numero: this.num});}, 1000)
  }

  stopGame() {
    clearInterval(this.inter);
  }
}
