import { Component, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostInterface } from '../post-interface';


@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css']
})
export class BlogPostItemComponent {
pageChanged($event: number) {
console.log($event)
this.p=$event

}
@Input() userSearch:string=''
isError:boolean=false;
pageSize: number=12;
p: number=1;
total:number=0;

  constructor(private _PostsService:PostsService){}

  datePoasted:any=new Date();
  
  _PostInterface:PostInterface[]=[];
  
  ngOnInit(): void {

    
    this._PostsService.getPostsAPI().subscribe({
      next:(res)=>{
        
        this._PostInterface=res;
        this.total = res.length;
        console.log(this._PostInterface.filter((par)=>par.title.includes(this.userSearch)))

      },
      error:(err)=>{console.log(err);
      this.isError=true;
      }
    })
  
  
  }
  postUrl(url:string){
    window.open(url,'blank')
  }

}
