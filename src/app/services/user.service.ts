import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { UserToAdd } from '../models/userToAdd';



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

  AddUser(userToAdd: UserToAdd) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }; 
     debugger;
    return this.http.post(this.usersURL, userToAdd);
  }

  deleteUser(userToDelete: User): any {
    const id = typeof userToDelete === 'number' ? userToDelete : userToDelete.id;
    const url = `${this.usersURL}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.delete<User>(url, httpOptions);
  }

  EditUser(userToEdit: User) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }; 
     debugger;
    return this.http.put(this.usersURL, userToEdit);
  }
}
