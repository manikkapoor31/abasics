import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService,private _route: ActivatedRoute, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) 
  {
    this.toastr.setRootViewContainerRef(vcr);
  }
  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories:["comedy","Drama","Action","Techology"];

  ngOnInit(): void 
  {

  }
  public createBlog():any
  {
    let blogData=
    {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody:this.blogBodyHtml,
      category: this.blogCategory
    }
    console.log(blogData);
    this.blogHttpService.createblog(blogData).subscribe(
      data=>
      {
        console.log("blog-created");
        console.log(data);
        this.toastr.success('Blog Posted!!','success');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },2000)
        alert('Blog posted successfully');

      },
      error=>
      {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )

  }

  

}
