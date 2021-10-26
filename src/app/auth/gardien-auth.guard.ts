import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditionService } from '../services/edition.service';

@Injectable({
  providedIn: 'root'
})
export class GardienAuthGuard implements CanActivate {
  constructor(private edition:EditionService, private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let res: boolean | UrlTree;
    if(this.edition.getConnecte())
    {
      res = true;
    }
    else{
      res = this.router.parseUrl("/login");
    }
    return res;
  }
  
}
