import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../class/models/student';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  childTitle = 'Child Two Component';
  addNumMsg = 'Add Number'
  num1: '';
  num2: '';

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  studentMsg: string;

  @Input('stdLeader')
  myStdLeader: Student;

  @Output('addNumberEvent')
  addNumEvent = new EventEmitter<number>();


  addNumber() {
    this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
  }}
