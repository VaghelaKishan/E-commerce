import { Injectable } from '@angular/core';
import { User } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  

  registerUser(user: User) {
    // let url = this.baseUrl + 'RegisterUser';
    // return this.http.post(url, user, { responseType: 'text' });
  }
 
  constructor(private http:HttpClient) { }

}
