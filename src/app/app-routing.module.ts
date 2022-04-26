import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
 {path:'about',component:AboutComponent},
 {path:'login',component:LoginComponent},
 {path:'comments',component:CommentsComponent},
 {path:'issues',component:HeaderComponent},
 {path:'repos',component:ReposComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
