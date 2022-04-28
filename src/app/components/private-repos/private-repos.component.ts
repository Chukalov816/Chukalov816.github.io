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
  token: string = '';
  hasError: boolean = false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.hasError = false;
    this.userService.getPrivateIssues(this.username, this.password, this.token).subscribe(
      (data) => (this.privateIssues = data),
      (error) => this.hasError = true,
    );

    this.username = '';
    this.password = '';
    this.token = '';


  }
}
