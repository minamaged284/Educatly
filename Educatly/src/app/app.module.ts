import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostsService } from './posts.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BlogPostItemComponent } from './blog-post-item/blog-post-item.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerInterceptor } from './spinner.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostItemComponent,
    SearchPipe,
    EmptyStateComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,MatFormFieldModule, MatInputModule, MatIconModule,FormsModule,BrowserAnimationsModule,NgxSpinnerModule,
    NgxPaginationModule,
    
    
  ],
  providers: [PostsService,{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  {provide:HTTP_INTERCEPTORS , useClass:SpinnerInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
