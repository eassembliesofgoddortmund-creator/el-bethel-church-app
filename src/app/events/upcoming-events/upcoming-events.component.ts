import {
  Component, OnInit
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsModel} from '../../models/Events.model';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {UpcomingEventCardComponent} from '../upcoming-event-card/upcoming-event-card.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upcoming-events',
  standalone: true, // Make sure it's standalone
  imports: [CommonModule, UpcomingEventCardComponent,
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']

})
export class UpcomingEventsComponent implements OnInit {
  events$: Observable<EventsModel[]> | undefined;

  constructor(private fireStore: Firestore) { }
  ngOnInit(): void {
    const eventsCollection = collection(this.fireStore, 'events');

    this.events$ = collectionData(eventsCollection, { idField: 'id' }).pipe(
      map((events) =>
        (events as EventsModel[]).sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateB - dateA; // Descending
        })
      )
    );
  }

}
