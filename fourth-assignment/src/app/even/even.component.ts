import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() numberIsEven!: boolean;
  @Input() counterChild!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
