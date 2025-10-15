import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
 import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {FloatingButtonComponent} from './floating-button/floating-button.component';
import {CookiesConsentComponent} from './cookies-consent/cookies-consent.component';
import {AngularFireModule} from '@angular/fire/compat';
import {CommonModule} from '@angular/common';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import {NgForOf} from '@angular/common';
gsap.registerPlugin(CustomEase);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    FooterComponent,
    CommonModule,
    TranslateModule,
    AngularFireModule,
    FloatingButtonComponent,
    CookiesConsentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'el-bethel-ag-church';

  constructor(private  translateService: TranslateService) {

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en')
    this.translateService.setFallbackLang('en');

  }


  // Preloader images using your slides
  preloaderImages = [
    '/pastor_family.jpeg',
    '/pianist.jpg',
    '/core_team.jpg',
    '/pastor_paul.jpg',
    '/bethel_14.jpeg',
    '/bethel_15.jpeg',
    '/bethel_20.jpeg',
    '/bethel_16.jpeg',
    '/bethel_17.jpeg',
    '/bethel_19.jpeg',
    '/bethel_29.jpeg',
  ];

  ngAfterViewInit(): void {

    window.addEventListener('load', () => this.startPreloader());
  }

  private startPreloader() {
    const preloader = document.querySelector('.preloader') as HTMLElement;
    const preloaderTextCosmic = document.querySelector('.preloader__text-cosmic') as HTMLElement;
    const preloaderTextReflections = document.querySelector('.preloader__text-reflections') as HTMLElement;
    const preloaderImages = document.querySelectorAll('.preloader__image') as NodeListOf<HTMLImageElement>;

    const masterTimeline = gsap.timeline();

    // Show first image
    gsap.set(preloaderImages[0], { opacity: 1, scale: 1 });

    // Animate remaining images
    preloaderImages.forEach((img, i) => {
      if (i > 0) {
        masterTimeline.fromTo(img,
          { opacity: 0, scale: 0.05 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
        );
        masterTimeline.to(preloaderImages[i - 1], { opacity: 0, duration: 0.15 }, '<0.1');
      }
    });

    const windowWidth = window.innerWidth;

    // Animate text split
    masterTimeline.to(preloaderTextCosmic, { x: -windowWidth/3, color: 'var(--color-text-primary)', duration: 0.8, ease: 'customEase' }, '-=0.5');
    masterTimeline.to(preloaderTextReflections, { x: windowWidth/3, color: 'var(--color-text-primary)', duration: 0.8, ease: 'customEase' }, '<');

    // Hide preloader
    masterTimeline.to(preloader, { y: '-100%', duration: 0.5, ease: 'power3.inOut', onComplete: () => {
        preloader.style.display = 'none';
      }});
  }


}
