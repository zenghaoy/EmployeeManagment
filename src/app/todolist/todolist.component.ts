import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  todoList = ['D12341234512345', 'R12341234512345', 'S12341234512345'];
  userInput = '';

  todoClass = {
    btn: true,
    'btn-danger': true,
  };

  todoStyle = {
    'background-color': 'black',
  };

  doDelete(index) {
    this.todoList.splice(index, 1);
  }

  doAdd() {
    this.todoList.push(this.userInput);
    this.userInput = '';
  }

  constructor() {}

  empList = [
    {
      eid: 101,
      ename: 'liang',
      salary: 5000,
      birthday: 'april',
      sex: 0,
      zzmm: 'D12341234512345',
    },
    {
      eid: 102,
      ename: 'zhang',
      salary: 5000,
      birthday: 'april',
      sex: 0,
      zzmm: 'D12341234512345',
    },
    {
      eid: 103,
      ename: 'peter',
      salary: 5000,
      birthday: 'april',
      sex: 0,
      zzmm: 'D12341234512345',
    },
  ];
}
