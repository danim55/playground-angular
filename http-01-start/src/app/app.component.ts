import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  @ViewChild('postForm') postForm: NgForm; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http
      .post<{ name: string }>('https://http-angular-course-25d77-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData).subscribe(responseData => {
          console.log(responseData);
        })
    this.postForm.reset();
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>('https://http-angular-course-25d77-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key })
          }
        }
        return postArray;
      }))
      .subscribe(posts => {
        this.loadedPosts = posts;
      })
  }
}
