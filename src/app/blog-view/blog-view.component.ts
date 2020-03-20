import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

//imported route related code
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy
{

  public currentBlog;

  constructor(private _route:ActivatedRoute,private router: Router,public blogService:BlogService) 
  { 
    console.log("blog-view constructor is called");
  }

  ngOnInit()
  {
    console.log("Blog-View Oninit Called");
    //getting the blog id from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //calling the function to get the blog with this blogId out of the overall
    this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    console.log("this.currentBlog");
  }
  ngOnDestroy()
  {
    console.log("blog view destroyed");

  }

}
