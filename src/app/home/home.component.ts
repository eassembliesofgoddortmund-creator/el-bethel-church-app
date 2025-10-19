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
import {FormsModule} from '@angular/forms';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  getDoc,
  doc,
  runTransaction,
  increment, setDoc,
} from '@angular/fire/firestore';
import {FreeConferenceCallComponent} from '../free-conference-call/free-conference-call.component';
import {LinkTreeComponent} from '../link-tree/link-tree.component';
import {ChurchInfoService} from '../services/church-info.service';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    TranslateModule,
    LightgalleryModule,
    WhatsappComponent,
    CommonModule,
    HomeGalleryComponent,
    FormsModule,
    FreeConferenceCallComponent,
    LinkTreeComponent
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

  isLoggedIn = false;
  showPreloader = false;
  showForm = false;
  newTime = '';
  serviceTime = '10:00 AM';
  sundaySchoolServiceTime ='11:30 AM'
  twiServiceTime = "2:00 PM";
  // **New dynamic fields**
  serviceAddress = 'Hannöversche Str. 22A, 44143 Dortmund';

  private intervalId: any;
  currentIndex = 0;
  youtubeLink =""
  facebookLink = "https://www.facebook.com/p/Dortmund-Assemblies-100071161759271/";
  instagramLink ="https://www.instagram.com/assembliesofgoddortmund"
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

  toggleForm() {
    this.showForm = !this.showForm;
  }

  slides = [
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Jeremiah 3:15 – “Then I will give you shepherds after my own heart, who will lead you with knowledge and understanding.”', img: '/pastor_family.jpeg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: '"El Bethel = “God of the House of God” — a name that honors the living presence of God who revealed Himself to Jacob at Bethel.',  img: '/pianist.jpg'  },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Jeremiah 29:11 (NIV) - "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."', img: '/pastor_paul.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: '1 John 4:19 (NIV) - "We love because he first loved us."', img: '/core_team.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Psalm 100:4 (NIV) - "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."', img: '/bethel_29.jpeg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: '1 John 3:18 (NIV) - "Dear children, let us not love with words or speech but with actions and in truth."', img: '/music_team.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Matthew 22:37–39 – Jesus said to him, You shall love the Lord your God with all your heart, with all your soul, and with all your mind. This is the first and great commandment. And the second is like it: You shall love your neighbor as yourself."', img: '/bethel_10.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'John 13:34–35 - "A new commandment I give to you, that you love one another; as I have loved you, that you also love one another. By this all will know that you are My disciples, if you have love for one another."', img: '/bethel_6.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Hebrews 13:16 – “Do not forget to do good and to share with others, for with such sacrifices God is pleased.”', img: '/bethel_37.JPG' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: '1 Peter 4:10 – “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace.”', img: '/bethel_11.jpg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Ephesians 4:3 – “Make every effort to keep the unity of the Spirit through the bond of peace.”', img: '/bethel_16.jpeg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Psalm 68:11 (ESV)- “The Lord gives the word; the women who announce the news are a great host.', img: '/bethel_30.jpeg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund', des: 'Colossians 3:23–24 (NIV) - "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.', img: '/bethel_14.jpeg' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund',
      des: 'Romans 12:11–12 – “Never be lacking in zeal, but keep your spiritual fervor, serving the Lord. Be joyful in hope, patient in affliction, faithful in prayer.”',
      img: '/bethel_31.JPG' },

    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund',
      des: 'John 14:15 – “If you love Me, keep My commands.”',
      img: '/bethel_33.JPG' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund',
      des: 'Matthew 7:11 – “If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good things to those who ask Him!”',
      img: '/bethel_34.JPG' },
    { author: 'Welcome to', title: 'El Bethel', topic: 'Assemblies of God, Dortmund',
      des: 'James 1:22 – “Do not merely listen to the word, and so deceive yourselves. Do what it says.”',
      img: '/bethel_35.JPG' },





  ];





  lang = '';
  private langSubscription!: Subscription;
  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
    private languageService: LanguageService,        // Inject the service
    private authService:AuthService,
    private router: Router,  // ✅ inject router
    private fireStore: Firestore , // 🔑 inject Firestore
    private churchInfoService: ChurchInfoService // ✅ inject

  ) {}

  ngOnInit() {
    this.lang = this.languageService.getCurrentLang();

    this.langSubscription = this.languageService.currentLang$.subscribe(lang => {
      this.lang = lang;
      this.cdr.detectChanges(); // Trigger change detection
      console.log("HOME LANG", this.lang);
    });

    // 🔑 subscribe to login state
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
      this.cdr.detectChanges();
    });

    this.loadServiceTimeAndAddress();
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


  async loadServiceTimeAndAddress() {
    try {
      const docRef = doc(this.fireStore, 'churchTimingAddress', 'main');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // ✅ Load all fields safely
        this.serviceTime = data['englishServiceTime'] || this.serviceTime;
        this.twiServiceTime = data['twiServiceTime'] || this.twiServiceTime;
        this.sundaySchoolServiceTime = data['sundaySchoolServiceTime'] || this.sundaySchoolServiceTime;
        this.serviceAddress = data['address'] || this.serviceAddress;

        // ✅ Update shared service
        this.churchInfoService.updateChurchInfo(  this.serviceTime,
          this.twiServiceTime,
          this.sundaySchoolServiceTime,
          this.serviceAddress);

        this.cdr.detectChanges(); // Update UI
      } else {
        console.log('No church timing document found.');
      }
    } catch (error) {
      console.error('Error loading service info:', error);
    }
  }

  async updateTime() {
    if (
      this.serviceTime.trim() &&
      this.twiServiceTime.trim() &&
      this.sundaySchoolServiceTime.trim() &&
      this.serviceAddress.trim()
    ) {
      try {
        const docRef = doc(this.fireStore, 'churchTimingAddress', 'main');
        await setDoc(docRef, {
          englishServiceTime: this.serviceTime,
          twiServiceTime: this.twiServiceTime,
          sundaySchoolServiceTime: this.sundaySchoolServiceTime,
          address: this.serviceAddress
        });

        // ✅ Update shared info
        this.churchInfoService.updateChurchInfo(
          this.serviceTime,
          this.twiServiceTime,
          this.sundaySchoolServiceTime,
          this.serviceAddress
        );

        console.log('All service times and address updated in Firestore');
        alert('Service times updated successfully!');


        this.showForm = false; // close the form
        await this.loadServiceTimeAndAddress(); // refresh UI
      } catch (error) {
        console.error('Error updating service info:', error);
      }
    } else {
      console.warn('Please fill in all required fields.');
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
