import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateReposComponent } from './components/private-repos/private-repos.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'issues', component: HeaderComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'privateIssues', component: PrivateReposComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
