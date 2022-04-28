import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-repo',
  templateUrl: './private-repo.component.html',
  styleUrls: ['./private-repo.component.scss']
})
export class PrivateRepoComponent implements OnInit {
@Input() privateIssue:any

  constructor() { }

  ngOnInit(): void {
  }

}
