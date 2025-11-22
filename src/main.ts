import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import {importProvidersFrom} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';

const firebaseConfig = {
 apiKey: "AIzaSyA1euTSeVOYBm00o3fikktGPJg4YXuuRqg",
  authDomain: "el-bethel-dortmund.firebaseapp.com",
  projectId: "el-bethel-dortmund",
  storageBucket: "el-bethel-dortmund.firebasestorage.app",
  messagingSenderId: "572883201724",
  appId: "1:572883201724:web:970b27787f1f6a8e6e2ab9",
  measurementId: "G-RS8NRE2GVV"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    ...(appConfig.providers || []),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),  // ✅ This was missing
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }, provideFirebaseApp(() => initializeApp({
 apiKey: "AIzaSyA1euTSeVOYBm00o3fikktGPJg4YXuuRqg",
  authDomain: "el-bethel-dortmund.firebaseapp.com",
  projectId: "el-bethel-dortmund",
  storageBucket: "el-bethel-dortmund.firebasestorage.app",
  messagingSenderId: "572883201724",
  appId: "1:572883201724:web:970b27787f1f6a8e6e2ab9",
  measurementId: "G-RS8NRE2GVV"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
