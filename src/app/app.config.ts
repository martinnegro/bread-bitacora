import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'bread-bitacora',
          appId: '1:623223766552:web:f42e9e5c3b9ce6d8dccd6d',
          storageBucket: 'bread-bitacora.appspot.com',
          apiKey: 'AIzaSyD_rUlYlr7QZBJZtCZcaEPWIxkcE_67YW4',
          authDomain: 'bread-bitacora.firebaseapp.com',
          messagingSenderId: '623223766552',
          measurementId: 'G-Z91SP3NLL4',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
