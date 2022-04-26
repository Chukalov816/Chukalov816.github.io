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
import { CommentsComponent } from './components/comments/comments.component';
import { ReposComponent } from './components/repos/repos.component';
import { RepoComponent } from './components/repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssuesComponent,
    NavComponent,
    LoginComponent,
    AboutComponent,
    CommentsComponent,
    ReposComponent,
    RepoComponent,
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
