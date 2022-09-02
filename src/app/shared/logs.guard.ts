import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SwarsService } from '../swars.service';

@Injectable({
  providedIn: 'root'
})
export class LogsGuard implements CanActivate {

  constructor(private swSvc: SwarsService, private readonly router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.swSvc.validation){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}
