import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck{
  @Input() element: {
    type: string,
    name: string,
    content: string,
  };
  @Input() name: string;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes);
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck(): void {
    console.log('ngDoCkeck called')
  }
}
