import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService} from "./../blog.service";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories=["comedy","Drama","Action","Techhnology"];
  

  constructor(private _route:ActivatedRoute,private router:Router,private blogHttpService:BlogHttpService, private toastr: ToastrService) 
  {  }

  ngOnInit() {
    let myBLogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBLogId);
    this.blogHttpService.getSingleBlogInformation(myBLogId).subscribe(
      data=>{
        console.log(data);
        this.currentBlog= data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog():any{
    console.log("inside edit blog");
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('Blog edited successfully','Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },1000)
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured','Error')
      }
    )
  }

}
