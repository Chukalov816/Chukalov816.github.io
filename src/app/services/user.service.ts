import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getRepo(username:string,repository:string):Observable<any>{
    const url=`https://api.github.com/repos/${username}/${repository}/issues`;
    return this.http.get<any>(url);
  }
}
