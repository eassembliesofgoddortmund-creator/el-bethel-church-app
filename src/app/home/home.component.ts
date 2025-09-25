import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import {LanguageService} from '../services/language.service';
import {Subscription} from 'rxjs';
import {  VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import {LightgalleryModule} from 'lightgallery/angular';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    RouterLink,
    TranslateModule,
    LightgalleryModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


  images =[
    {
      "data-src":"/church_photo_2.jpg",
      "data-responsive":"/church_photo_2.jpg",
      "src":"/church_photo_2_thumb_250.jpg"
    },
    {
      "data-src":"/miracle_church_5.jpeg",
      "data-responsive":"/miracle_church_5.jpeg",
      "src":"/miracle_church_5_250_thumbnail.jpeg"
    },
    {
      "data-src":"/miracle_church_1.jpeg",
      "data-responsive":"/miracle_church_1.jpeg",
      "src":"/miracle_church_1_250_thumbnail.jpeg"
    },
    {
      "data-src":"/miracle_church_2.jpeg",
      "data-responsive":"/miracle_church_2.jpeg",
      "src":"/miracle_church_2_250_thumbnail.jpeg"
    },
    {
      "data-src":"/miracle_church_3.jpeg",
      "data-responsive":"/miracle_church_3.jpeg",
      "src":"/miracle_church_3_250_thumbnail.jpeg"
    },
    {
      "data-src":"/miracle_church_4.jpeg",
      "data-responsive":"/miracle_church_4.jpeg",
      "src":"/miracle_church_4_250_thumbnail.jpeg"
    },
    {
      "data-src":"/miracle_church_6.jpeg",
      "data-responsive":"/miracle_church_6.jpeg",
      "src":"/miracle_church_6_250_thumbnail.jpeg"
    },
    {
      "data-src":"/miracle_church_7.jpeg",
      "data-responsive":"/miracle_church_7.jpeg",
      "src":"/miracle_church_7_250_thumbnail.jpeg"
    },
  ]

  youtubeLink ="https://www.youtube.com/@revprinceedos924/videos"
  facebookLink = "https://www.facebook.com/miraclecenterDO";
  instagramLink ="https://www.instagram.com/"
  emailLink ="";
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


  lang = '';
  private langSubscription!: Subscription;
  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
    private languageService: LanguageService,        // Inject the service
    private authService:AuthService
  ) {}

  ngOnInit() {
    this.lang = this.languageService.getCurrentLang();

    this.langSubscription = this.languageService.currentLang$.subscribe(lang => {
      this.lang = lang;
      this.cdr.detectChanges(); // Trigger change detection
      console.log("HOME LANG", this.lang);
    });
  }






}
