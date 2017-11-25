import {Component, OnInit} from '@angular/core';
import {Student} from '../../class/models/student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parentTitle = 'Parent Component';

  myFriendName = 'Friend Name';
  // Property for child component one
  cityMsg2 = 'Bangladesh City Names';
  cityArray = ['Dhaka', 'Tangail', 'Khulna'];
  stdAddMsg = 'Add Student';

  friends = ['Uttam', 'Himu', 'Shanta', 'Sumon'];
  // Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Imran', 'Hassan');

  // Property used in parent
  stdFullName = '';
  sum = '';
  msg = 't';

  constructor() {
  }

  ngOnInit() {
  }

  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname;
  }

  printSum(res) {
    this.sum = res;
  }

  printMsg(msg) {
    this.msg = msg;
  }
}
