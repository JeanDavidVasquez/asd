import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"serviciosenfermeria-df5d5","appId":"1:732919500763:web:175017e658d518d9a8e1fe","storageBucket":"serviciosenfermeria-df5d5.appspot.com","apiKey":"AIzaSyB3v4322JLrRqeOp90ej2bB0s1gtSzoKZk","authDomain":"serviciosenfermeria-df5d5.firebaseapp.com","messagingSenderId":"732919500763","measurementId":"G-5QCVZ00XCT"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
