import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditionService {
  estEditable:BehaviorSubject<boolean>;
  estEditable$:Observable<boolean>;

  constructor() { 
    this.estEditable = new BehaviorSubject<boolean>(false);
    this.estEditable$ = this.estEditable.asObservable();
  }

  setEditable(bEdit:boolean):void{
    this.estEditable.next(bEdit);
  }

  getEditable():Observable<boolean>{
    return this.estEditable;
  }

}
