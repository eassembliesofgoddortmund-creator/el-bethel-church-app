import {
  Component, OnInit
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsModel} from '../../models/Events.model';
import {Observable} from 'rxjs';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {UpcomingEventCardComponent} from '../upcoming-event-card/upcoming-event-card.component';


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
    this.events$ = collectionData(eventsCollection, { idField: 'id' }) as Observable<EventsModel[]>;
  }


}
