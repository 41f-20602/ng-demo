import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditionService {
  //estEditable:BehaviorSubject<boolean>;
  //estEditable$:Observable<boolean>;
  etatConnexion:boolean = false;

  constructor(private router:Router) { 
    console.log("Le service est construit");
    //this.estEditable = new BehaviorSubject<boolean>(false);
    //this.estEditable$ = this.estEditable.asObservable();
  }

  

  set connecte(etatConnexion:boolean){
    this.etatConnexion = etatConnexion;
    if(this.etatConnexion == false){
      this.router.navigate(["/"]);
    }
  }
  get connecte():boolean{
    return this.etatConnexion;
  }
  
  setConnecte(etatConnexion:boolean):void{
    this.etatConnexion = etatConnexion;
    if(this.etatConnexion == false){
      this.router.navigate(["/"]);
    }
  }

  getConnecte():boolean{
    return this.etatConnexion;
  }

  /*setEditable(bEdit:boolean):void{
    this.estEditable.next(bEdit);
  }*/

  /*getEditable():Observable<boolean>{
    return this.estEditable;
  }*/

}
