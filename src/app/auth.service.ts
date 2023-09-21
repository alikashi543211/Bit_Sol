import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _registerUrl = "http://click_learning.test/api/auth/register"
    private _loginUrl = "http://click_learning.test/api/auth/login"
    private _getUserUrl = "http://click_learning.test/api/parent/profile/getParentDetail"
    constructor(private _httpClient: HttpClient, private _router:Router) { }

    registerUser(user) {
        return this._httpClient.post<any>(this._registerUrl, user);
    }

    loginUser(user) {
        return this._httpClient.post<any>(this._loginUrl, user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/events']);
    }

    getLoggedInUser() {
        return this._httpClient.get<any>(this._getUserUrl);
    }
}
