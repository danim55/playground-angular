import { EventEmitter, Injectable } from "@angular/core";
import { Subject, Subscriber } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {

    // activated = new EventEmitter<boolean>;

    activated = new Subject<boolean>();

}