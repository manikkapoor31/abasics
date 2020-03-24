import { Injectable } from '@angular/core';

//importing http service
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

//import observable related code
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  private authToken='M2QxZGQ3NzUwZTg3YzRhMzgxNGU4OTFmYmFjMDVjOGY0YmQyZWEyZTMxMDgyN2MyODA0YTY5MzEzM2Y1MjlmMjQyODIyZmJmNTlkZTJkYjY5MTVmOWQ4ZDIyNjBkNDQzNGNmZjE5ZDVlZDcwYWE2NTJkMzVkNmQxNzc0ZGJmOWE1MA=='

  constructor(private _http:HttpClient) 
  {
    console.log("blog-http service was called");

  }
  //exception handler
  private handleError(err:HttpErrorResponse)
  {
    console.log("Handle http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to get all blogs
  public getAllBlogs()
  {
    let myResponse=this._http.get(this.baseUrl+'/all?authToken=M2QxZGQ3NzUwZTg3YzRhMzgxNGU4OTFmYmFjMDVjOGY0YmQyZWEyZTMxMDgyN2MyODA0YTY5MzEzM2Y1MjlmMjQyODIyZmJmNTlkZTJkYjY5MTVmOWQ4ZDIyNjBkNDQzNGNmZjE5ZDVlZDcwYWE2NTJkMzVkNmQxNzc0ZGJmOWE1MA==');
    console.log(myResponse);
    return myResponse;  
  }
  //method to get a single blog
  public getSingleBlogInformation(currentBlogId):any
  {
    let response = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+ '?authToken='+this.authToken);
    return response;
  }
  //end get blog information function

  //function to create a single blog
  public createblog(blogData):any
  {
    let response=this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
    return response;
  }

  //function to delete blog
  public deleteBlog(blogId):any{
    let data={};
    let response=this._http.post(this.baseUrl, '/'+blogId+ '/delete'+ this.authToken,data)
    return response;
  }

  //function to edit blogs
  public editBlog(blogId,blogData):any
  {
    let response=this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken,blogData);
    return response;
  }


}
