import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGard implements CanActivate{
    
    constructor(private authService:AuthService,private router:Router){}
    
    canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(this.authService.isAuthenticated()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
        }

    }
}