import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {OurPastorComponent} from './our-pastor/our-pastor.component';
import {FaithStatementComponent} from './faith-statement/faith-statement.component';
import {HistoryComponent} from './history/history.component';
import {ChurchStaffComponent} from './church-staff/church-staff.component';
import {SupportingComponent} from './supporting/supporting.component';
import {GalleryComponent} from './gallery/gallery.component';
import {PurposeAndMissionComponent} from './purpose-and-mission/purpose-and-mission.component';

export const ABOUT_ROUTES: Routes = [
  {
    path:'',
    component:AboutComponent,
    children:[
      { path: 'about-us', component: AboutUsComponent },
      { path: 'our-pastor', component: OurPastorComponent },
      { path: 'faith-statement', component: FaithStatementComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'church-staff', component: ChurchStaffComponent },
      { path: 'supporting', component: SupportingComponent },
      {path:'gallery', component:  GalleryComponent},
      {path:'purpose-and-mission',component:PurposeAndMissionComponent}
    ]
  }
];

