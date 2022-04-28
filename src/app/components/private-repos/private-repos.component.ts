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
  repository: string = '';
  token: string = '';
  hasError: boolean = false;
  currentUser:string='';
  currentRepo:string='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.hasError = false;
    this.currentUser=`Current username: ${this.username}`;
    this.currentRepo=`Current repo: ${this.repository}`;
    this.userService.getPrivateIssues(this.username, this.repository, this.token).subscribe(
      (data) => (this.privateIssues = data),
      (error) => this.hasError = true,
    );

    this.username = '';
    this.repository = '';
    this.token = '';


  }
}
