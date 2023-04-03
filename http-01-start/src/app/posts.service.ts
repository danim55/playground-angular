import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Post } from "./post.module";

@Injectable({ providedIn: 'root' })
export class PostsService {

  error = new Subject;

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content }
    this.http
      .post<{ name: string }>(
        'https://http-angular-course-25d77-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        {
          observe: 'response',
        })
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error);
      })
  }

  fetchPosts() {
    let customParams = new HttpParams();
    customParams = customParams.append('print', 'pretty');
    customParams = customParams.append('custom', 'ronaldo');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://http-angular-course-25d77-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Accept': 'application/json' }),
          params: customParams,
          responseType: 'json',
        }
      )
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key })
          }
        }
        return postArray;
      }),
        catchError(errorResponse => {
          return throwError(errorResponse);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://http-angular-course-25d77-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      ).pipe(tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Data send');
        }
        else if (event.type === HttpEventType.Response) {
          console.log('Info received')
          console.log(event.body);
        }
      }));
  }
}