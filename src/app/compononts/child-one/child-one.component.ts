import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../class/models/student';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  @Input('ctMsg1')
  ctMsg: string;

  @Input()
  myFriendNameChildOne: string;


  @Input('ctArray')
  myctArray: Array<string>;

  @Input()
  myFriendsChildOne: Array<string>;

  @Input('studentAddMsg')
  addMsg: string;

  @Output()
  addStdEvent = new EventEmitter<Student>();

  @Output()
  sendMsgEvent = new EventEmitter<string>();

  student = new Student();
  childTitle = 'Child one component';
  message = 'Send Message'
  msg: string;

  constructor() {
  }

  ngOnInit() {
  }

  addStudent() {
    this.addStdEvent.emit(this.student);
  }

  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }
}
