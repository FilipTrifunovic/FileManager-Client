import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class AuthService{
    storageKey:string='token';
    constructor(private router:Router,private httpClient:HttpClient){}

    signupUser(user:User){
        const body = JSON.stringify(user);
        return this.httpClient.post('',body)
        .pipe(
            map((response:Response)=>{
                if(response){
                    this.router.navigate(['/']);
                }
                else{
                    console.log('error');
                }
            })
        )
    }

    login(user:User){
        const body = user;
        return this.httpClient.post('',body)
        .pipe(
            map((responese:Response)=> {return responese})
        )
    }

    logout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    getToken(){
        return localStorage.getItem(this.storageKey);
    }

    setToken(token:string){
        localStorage.setItem(this.storageKey,token);
    }

    isAuthenticated():boolean{
        return localStorage.getItem('token') !==null;
    }
}