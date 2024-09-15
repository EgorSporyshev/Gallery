import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from "../model/user.model";
import {Observable} from 'rxjs';


@Injectable()
export class EditService {

  constructor(private http: HttpClient) {
  }

  deleteUser(id:number | undefined): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${id}`);
  }

  updateUser(data: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${data.id}`, data);
  }
}
