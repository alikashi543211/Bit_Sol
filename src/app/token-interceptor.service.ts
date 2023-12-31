import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private _injector: Injector) { }

    intercept(req, next) {
        let _authService = this._injector.get(AuthService)
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${_authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
