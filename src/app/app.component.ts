import { Component, OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
  title = 'lifecycle-hooks';
  count = 0;
  show = true;

  ngOnInit() {
    console.log("I'm in Init")
  }

  ngOnChanges(changes) {
    console.log("I'm in Changes")
  }

  ngAfterContentChecked() {
    console.log("Im in content after checked, ngAfterContentChecked")
  }

  ngAfterContentInit() {
    console.log("Im in content after init")
  }

  ngAfterViewChecked() {
    console.log("Im in content after view checked")
  }

  delete() {
    this.show = false;
  }

  inc() {
    this.count++
  }
}
