import { Component, OnInit } from '@angular/core';

import { provideRoutes } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  public allBlogs;
  constructor(public blogService:BlogService) 
  { 
    console.log("home constructor calledddd");
    this.allBlogs=this.blogService.getAllBlogs();
  }

  ngOnInit() 
  {
    console.log("home Onint called");
    this.allBlogs=this.blogService.getAllBlogs();
    console.log(this.allBlogs);
  }
  ngOnDestroy()
  {
    console.log("Home component destroyed");
  }

 
}
