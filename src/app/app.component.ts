import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service'
import { Observable } from 'rxjs';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) { }

  usersJson: Observable<User[]> = this.userService.getUsers();
  users: User[] = [];

  ngOnInit(): void {
    this.usersJson.subscribe((users: User[]) => {
      this.users = users;
    })
  }

}
