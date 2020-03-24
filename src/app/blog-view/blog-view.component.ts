import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

//imported route related code
import { ActivatedRoute, Router } from '@angular/router';

import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy
{

  public currentBlog;
  

  constructor(private _route:ActivatedRoute,private router: Router,public blogService:BlogService,public blogHttpService:BlogHttpService) 
  { 
    console.log("blog-view constructor is called");
  }

  ngOnInit()
  {
    console.log("Blog-View Oninit Called");
    //getting the blog id from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling   the function to get the blog with this blogId out of the overall array 
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>
      {
        console.log(data);
        this.currentBlog=data["data"];

      },
      error=>
      {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log("this.currentBlog");
  }
  ngOnDestroy()
  {
    console.log("blog view destroyed");

  }

}
