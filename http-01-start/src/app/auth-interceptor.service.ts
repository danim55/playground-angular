import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Request has been sent');
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'xyz'),
            params: req.params.append('test', 'params'),
        });
        return next.handle(modifiedRequest).pipe(tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Response){
                console.log('Response received. Body data is: ');
                console.log(event.body);
            }
        }));
    }
}