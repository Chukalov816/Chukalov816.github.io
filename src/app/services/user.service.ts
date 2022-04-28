import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getIssues(username:string,repository:string):Observable<any>{
    const url=`https://api.github.com/repos/${username}/${repository}/issues`;
    return this.http.get<any>(url);
  }
  getRepos(username:string):Observable<any>{
    const url=`https://api.github.com/users/${username}/repos`;
    return this.http.get<any>(url);
  }
  getPrivateIssues(username:string,repo:string,token:string):Observable<any>{
    const url=`https://api.github.com/repos/${username}/${repo}/issues`;
    const headerDict = {
     "Authorization" : `Token ${token}`,
     "Accept": "application/vnd.github.v3+json"
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.http.get(url,requestOptions);
  }

}
