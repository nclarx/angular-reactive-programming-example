import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {
  tap,
  map,
  shareReplay,
  share,
  publishReplay,
  refCount
} from "rxjs/operators";
import { Observable } from "rxjs";

export interface User {
  username: string;
  email: string;
  userId: string;
}

@Injectable()
export class UserService {
  // private host = "http://localhost:8080/";
  private usersEndpoint = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  getUserById(userId: number): Observable<User> {
    // add return types to your functions ^
    return this.http
      .get(
        this.usersEndpoint // returns an array of users that I will map to a single user - I didn't use yours because I don't understand what it is, check out https://jsonplaceholder.typicode.com/users and what it returns
      )
      .pipe(
        map((users: User[]) => {
          // you only need to use map if you need to modify the structure
          return users[2]; // returns the first user in the array
        })
      );
  }
}
