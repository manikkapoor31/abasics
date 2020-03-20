import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AboutComponent } from './about/about.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path:'home',component : HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'create',component: BlogCreateComponent},
      {path:'edit',component: BlogEditComponent},
      {path:'about',component: AboutComponent},
      {path:'blog/:blogId',component: BlogViewComponent},
      {path:'**', component: HomeComponent},
    ])
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
