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
  apiKey: "AIzaSyDVneLGeDi1aQv3l14eTgEgOpgCw8_FEVs",
  authDomain: "el-bethel-ag-church-new.firebaseapp.com",
  projectId: "el-bethel-ag-church-new",
  storageBucket: "el-bethel-ag-church-new.firebasestorage.app",
  messagingSenderId: "207734713705",
  appId: "1:207734713705:web:d1ab123bef19d5ab3fa1f8"
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
      apiKey: "AIzaSyDVneLGeDi1aQv3l14eTgEgOpgCw8_FEVs",
      authDomain: "el-bethel-ag-church-new.firebaseapp.com",
      projectId: "el-bethel-ag-church-new",
      storageBucket: "el-bethel-ag-church-new.firebasestorage.app",
      messagingSenderId: "207734713705",
      appId: "1:207734713705:web:d1ab123bef19d5ab3fa1f8"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
