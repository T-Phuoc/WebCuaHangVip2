import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"tungphuoc-5c773","appId":"1:136438958614:web:557d4bde64cf45508e8337","storageBucket":"tungphuoc-5c773.appspot.com","apiKey":"AIzaSyAcNt5IXEKxZJgIdl7X7-0gF1ojxoVgNEU","authDomain":"tungphuoc-5c773.firebaseapp.com","messagingSenderId":"136438958614"})),
    provideAuth(() => getAuth())]
};
