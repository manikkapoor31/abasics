import { Component, OnInit } from '@angular/core';

import { provideRoutes } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  public allBlogs;
  constructor(public blogHttpService:BlogHttpService) 
  { 
    console.log("home constructor calledddd");
    this.allBlogs=this.blogHttpService.getAllBlogs();
  }
   //exception handler
   private handleError(err:HttpErrorResponse)
   {
     console.log("Handle http calls");
     console.log(err.message);
     return Observable.throw(err.message);
   }
  ngOnInit() 
  {
    console.log("home Onint called");
    //this.allBlogs=this.blogService.getAllBlogs();
    console.log(this.allBlogs);
    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.allBlogs=data["data"];
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }
  ngOnDestroy()
  {
    console.log("Home component destroyed");
  }


}
