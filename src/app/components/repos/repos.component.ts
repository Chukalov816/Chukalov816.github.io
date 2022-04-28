import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: string[] = [];
  username: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.getRepos(this.username).subscribe((data) => (this.repos = data)
    );

    this.username = '';
  }
}
