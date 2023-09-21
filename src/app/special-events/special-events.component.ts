import { EventService } from './../event.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-special-events',
    templateUrl: './special-events.component.html',
    styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent {
    specialEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    constructor(private _eventService: EventService) { }

    ngOnInit() {
        this._eventService.getSpecialEvents()
            .subscribe(
                res => this.specialEvents = res,
                err => console.log(err)
            )
    }
}
