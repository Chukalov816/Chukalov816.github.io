import { Component,OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

issues:string[]=[];

username:string='';
repository:string='';
hasError:boolean=false;
currentUser:string='';
currentRepo:string='';



  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.hasError = false;
    this.currentUser=`Current username: ${this.username}`
    this.currentRepo=`Current repo: ${this.repository}`;
    this.userService.getIssues(this.username, this.repository).subscribe(
      (data) => (this.issues = data),
      (error) => this.hasError = true,
    );

this.username='';
this.repository='';


  }
}
