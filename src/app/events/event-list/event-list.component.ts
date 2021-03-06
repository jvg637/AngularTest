import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventService } from '../../core/event.service';

@Component({
  selector: 'oevents-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[];
  selectedEvent: Event;
  displayedColumns: string[] = ['Date'  , 'Location', 'Title'];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.selectedEvent = events[0];
    });
  }

  onSelectEvent(event: Event) {
    this.selectedEvent = event;
    console.log(event.title);
  }
}
