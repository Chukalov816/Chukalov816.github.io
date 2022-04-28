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


  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.hasError = false;
    this.userService.getIssues(this.username, this.repository).subscribe(
      (data) => (this.issues = data),
      (error) => this.hasError = true,
    );

this.username='';
this.repository='';


  }
}
