import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsModel} from '../../models/Events.model';
import {EventService} from '../../services/event.service';
import {AuthService} from '../../services/auth.service';
import {event} from 'jquery';

@Component({
  selector: 'app-upcoming-event-card',
  imports: [CommonModule],
  templateUrl: './upcoming-event-card.component.html',
  styleUrl: './upcoming-event-card.component.scss'
})
export class UpcomingEventCardComponent {
  @Input() event!: EventsModel;   // 👈 single event input

}
