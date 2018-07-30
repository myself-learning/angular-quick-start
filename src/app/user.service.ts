import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Subject } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  public userSubjcet = new Subject<any>();

  constructor(private http: Http) {}

  getAll() {
    return this.http.get('./assets/data/user.json').map(res =>  res.json() );
  }

  add(user) {
    this.userSubjcet.next(user);
  }
}
