import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostInterface } from '../post-interface';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent  {

  userInput:string='';
constructor(private _PostsService:PostsService){}

datePoasted:any=new Date();

_PostInterface:PostInterface[]=[];

ngOnInit(): void {
  
  this._PostsService.getPostsAPI().subscribe({
    next:(res)=>{
      
      this._PostInterface=res;
      console.log(this._PostInterface)
    }
  })


}
postUrl(url:string){
  window.open(url,'blank')
}

}
