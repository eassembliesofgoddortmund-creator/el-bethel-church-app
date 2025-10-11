import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import {LanguageService} from '../services/language.service';
import {Subscription} from 'rxjs';
import {  VERSION } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import {LightgalleryModule} from 'lightgallery/angular';
import {AuthService} from '../services/auth.service';
import {WhatsappComponent} from '../whatsapp/whatsapp.component';
import { trigger, style, animate, transition, query, group } from '@angular/animations';
import {CommonModule} from '@angular/common';
import {HomeGalleryComponent} from './home-gallery/home-gallery.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    TranslateModule,
    LightgalleryModule,
    WhatsappComponent,
    CommonModule,
    HomeGalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('carouselFade', [
      transition(':increment', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%' }), { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease', style({ opacity: 0, transform: 'translateY(50px)' })) // slide down
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(-50px)' }), // start above
            animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ], { optional: true })
        ])
      ]),
      transition(':decrement', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%' }), { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease', style({ opacity: 0, transform: 'translateY(-50px)' })) // slide up
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(50px)' }), // start below
            animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]

})
export class HomeComponent implements OnInit{

  showPreloader = false;

  private intervalId: any;
  currentIndex = 0;
  youtubeLink =""
  facebookLink = "https://www.facebook.com/p/Dortmund-Assemblies-100071161759271/";
  instagramLink ="https://www.instagram.com/Dortmund%20Assemblies"
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

  slides = [
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: '"El Bethel = “God of the House of God” — a name that honors the living presence of God who revealed Himself to Jacob at Bethel.', img: '/bethel_13.jpeg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Matthew 22:37–39 – Jesus said to him, You shall love the Lord your God with all your heart, with all your soul, and with all your mind. This is the first and great commandment. And the second is like it: You shall love your neighbor as yourself."', img: '/bethel_10.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'John 13:34–35 - "A new commandment I give to you, that you love one another; as I have loved you, that you also love one another. By this all will know that you are My disciples, if you have love for one another."', img: '/bethel_6.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Colossians 3:23 – “Whatever you do, work at it with all your heart, as working for the Lord, not for men.”', img: '/bethel_9.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Hebrews 13:16 – “Do not forget to do good and to share with others, for with such sacrifices God is pleased.”', img: '/bethel_10.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: '1 Peter 4:10 – “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace.”', img: '/bethel_11.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Ephesians 4:3 – “Make every effort to keep the unity of the Spirit through the bond of peace.”', img: '/bethel_8.jpg' },

  ];





  lang = '';
  private langSubscription!: Subscription;
  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
    private languageService: LanguageService,        // Inject the service
    private authService:AuthService,
    private router: Router,  // ✅ inject router

  ) {}

  ngOnInit() {
    this.lang = this.languageService.getCurrentLang();

    this.langSubscription = this.languageService.currentLang$.subscribe(lang => {
      this.lang = lang;
      this.cdr.detectChanges(); // Trigger change detection
      console.log("HOME LANG", this.lang);
    });
  }



  goToSlide(index: number) {
    this.currentIndex = index;
  }

  ngAfterViewInit(): void {


    this.intervalId = setInterval(() => this.nextSlide(), 6000);
  }

  ngOnDestroy(): void {
    // Clear interval when navigating away to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // When called, show preloader for 3 seconds
  togglePreloader() {
    this.showPreloader = true;

    setTimeout(() => {
      this.showPreloader = false;
      this.router.navigate(['/about/about-us']); // ✅ navigate after delay
    }, 2000); // 3 seconds = 3000 ms
  }
  showLoader() {
    this.showPreloader = true;
  }

  hideLoader() {
    this.showPreloader = false;
  }


}
