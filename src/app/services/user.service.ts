import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'https://localhost:44338/api/User'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersURL);
  }

  GetUser(id: number): Observable<User>{
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url);
  }
}
