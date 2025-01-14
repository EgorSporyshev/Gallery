import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService{
  constructor(private http: HttpClient) {
  }
  getUsers(email: string): Observable<User | undefined> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
      .pipe(map((user: User[]) => user[0] ? user[0] : undefined));
  }
  createUser(user: User){
    return this.http.post('http://localhost:3000/users', user);
  }
}
