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


  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
this.userService.getRepo(this.username,this.repository).subscribe((data)=>(this.issues=data)
);



    
  }
}
