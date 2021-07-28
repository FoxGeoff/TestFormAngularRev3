export interface User {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

const USER_DATA: User[] = [
  {firstName: 'Fred', lastName: 'Evens', email: 'fred@server.com', phone: '846-444-8322'},
  {firstName: 'Joan', lastName: 'Smith', email: 'jsmith@gmail.com', phone: '546-111-1452'},
  {firstName: 'Mary', lastName: 'Blogs', email: 'mblogs@hotmail.com', phone: '577-294-1882'},
  {firstName: 'Jack', lastName: 'Duffy', email: 'duffyj@gmail.com', phone: '113-435-6279'},
  {firstName: 'Jill', lastName: 'McMuck', email: 'mcduck@box.org', phone: '100-354-9901'},
  {firstName: 'Sue', lastName: 'Carbon', email: 'suec@outlook.com', phone: '134-378-4987'},
  {firstName: 'David', lastName: 'Nitrogen', email: 'david@outlook.com', phone: '885-384-8800'},
  {firstName: 'Wendy', lastName: 'Oxygen', email: 'oxy@outlook.com', phone: '981-882-0505'},
  {firstName: 'Bill', lastName: 'Fluorine', email: 'bill@computer.org', phone: '868-129-5489'},
  {firstName: 'Will', lastName: 'Neon', email: 'will@net.gov', phone: '208-556-7893'},
];

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;

  // table
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone'];
  dataSource = USER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser() {

  }

  onCancel() {

  }
}



