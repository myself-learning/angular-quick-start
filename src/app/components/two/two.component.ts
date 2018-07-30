import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  users:any;
  error:string;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAll()
    .subscribe(
      (data) => {
        this.users = data
      },
      error => this.error = error.statusText
    );

    this.userService.userSubjcet.subscribe((user) => {
      console.log('two');
      console.log(user);
      this.users.push({id:6, name: user});
    });
  }

}
