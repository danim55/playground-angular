import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startPressed = new EventEmitter<number>();
  counter: any=0;
  ref:any;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){ 
    this.ref = setInterval(()=>{
      this.counter++;
      this.startPressed.emit(this.counter);
    },1000)
  }

  onStop(){
    clearInterval(this.ref);
  }

}
