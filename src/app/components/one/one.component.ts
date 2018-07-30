import { Component, OnInit } from '@angular/core';

import { UserService } from "../../user.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.add({ "id": 6, "name": 'Ankita'});
  }

  addUser(user) {
    this.userService.add(user);
  }

}
