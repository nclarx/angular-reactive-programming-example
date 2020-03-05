import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService, User } from "./user.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  public userId: number = null;
  subscriptionUserId$;
  subscriptionUser$;

  constructor(public userService: UserService) {}

  ngOnInit() {
    // Imagine that you have this subscription to the route param ...
    // I don't have router added here so I can't use it
    // this.subscriptionUserId$ = this.route.paramMap.subscribe( // Do this in onInit not the constructor
    // (params: ParamMap) => {
    // this.userId = parseInt(params.get("userId"));

    this.user$ = this.userService.getUserById(this.userId); // this needs to be called here or the userId won't be available
  }
  // );

  ngOnDestroy() {
    // These not required:
    // if (this.subscriptionUserId$) this.subscriptionUserId$.unsubscribe();
    // if (this.subscriptionUser$) this.subscriptionUser$.unsubscribe();
  }
}
