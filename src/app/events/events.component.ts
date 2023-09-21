import { EventService } from './../event.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent {
    events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    constructor(private _eventService: EventService) { }

    ngOnInit() {
        this._eventService.getEvents()
            .subscribe(
                res => this.events = res,
                err => console.log(err)
            )
    }
}
