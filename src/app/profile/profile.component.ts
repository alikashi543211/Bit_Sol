import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    user:any;

    constructor(private _authService: AuthService) {}

    ngOnInit() {
        this._authService.getLoggedInUser().subscribe(res => {
            this.user = res.data;
        });
    }
}
