import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private _eventsUrl = "http://click_learning.test/api/events";
    private _specialEventsUrl = "http://click_learning.test/api/special";

    constructor(private _http: HttpClient) { }

    getEvents() {
        return this._http.get<any>(this._eventsUrl);
    }

    getSpecialEvents() {
        return this._http.get<any>(this._specialEventsUrl);
    }
}
