import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  boxColor;

  @Input()
  placeholderText;

  // It will get no. of User/Admin to be removed.
  @Input()
  removeCount;

  tcount: number = 0;

  @Output() inputEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onCreate(input) {
    if (input.value.length > 0) {
      this.tcount += 1;
      this.inputEvent.emit(input.value);
      input.value = '';
    } else {
      alert('Please provide value');
    }
  }
}
