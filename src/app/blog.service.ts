import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService 
{
  public currentBlog;
  public allBlogs=
  [
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "tags": [],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },{
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "tags": [],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "tags": [],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    }
  ]

  constructor() { }

  public getAllBlogs(){
    return this.allBlogs;

  }
  
  public getSingleBlogInformation(currentBlogId):any
  {
    //using a for of loop here from type script
    //https:www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    for(let blog of this.allBlogs)
    {
      if(blog.blogId== currentBlogId)
      {
        this.currentBlog=blog;
      }
    }
    console.log(this.currentBlog)
    return this.currentBlog;
  }

  
}
