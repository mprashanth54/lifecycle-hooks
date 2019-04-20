import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit, OnDestroy {

  @Input() num;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("In changes")
  }

  ngOnDestroy() {
    console.log("I'm getting destroyed")
  }

}
