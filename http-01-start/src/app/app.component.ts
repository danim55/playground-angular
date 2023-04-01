import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.module';
import { NgForm } from '@angular/forms';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error: Error = null;
  errorSub: Subscription;
  @ViewChild('postForm') postForm: NgForm;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.error.subscribe((error: Error) => {
      this.error = error;
    })

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, error => {
      this.isFetching = false;
      this.error = error;
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.postForm.reset();
  }
  
  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, error => {
      this.isFetching = false;
      this.error = error;
      // testing
    })
  }

  onHandleError(){
    this.isFetching = false;
    this.error = null;
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(response => {
      this.loadedPosts = [];
    })
  }

}
