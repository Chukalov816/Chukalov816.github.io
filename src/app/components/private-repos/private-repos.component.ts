import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-private-repos',
  templateUrl: './private-repos.component.html',
  styleUrls: ['./private-repos.component.scss']
})
export class PrivateReposComponent implements OnInit {
  privateIssues: string[] = [];
  username: string = '';
  password: string = '';
  token:string='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.getPrivateIssues(this.username,this.password,this.token).subscribe((data)=>(this.privateIssues=data)
    );
    
    
    this.username='';
    this.password='';
    this.token='';
    
    
      }
}
