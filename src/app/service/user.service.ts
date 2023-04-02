import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable()
export class UserService {

    private userUrl = 'http://localhost:8080/user';
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<Array<User>>(this.userUrl);
    }

    saveUser(user: User) {
        return this.http.post<User>(this.userUrl, user);
    }
}