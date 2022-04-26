import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
@Input() repo:any;
show:boolean=false;
buttonName:any='Show';
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
