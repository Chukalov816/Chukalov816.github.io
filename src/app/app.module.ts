import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IssuesComponent } from './components/issues/issues.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';

import { ReposComponent } from './components/repos/repos.component';
import { RepoComponent } from './components/repo/repo.component';
import { PrivateReposComponent } from './components/private-repos/private-repos.component';
import { PrivateRepoComponent } from './components/private-repo/private-repo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssuesComponent,
    NavComponent,
    LoginComponent,
    AboutComponent,
    ReposComponent,
    RepoComponent,
    PrivateReposComponent,
    PrivateRepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
