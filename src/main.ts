import { enableProdMode, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { PrincipalComponent } from 'src/app/observable/principal/PrincipalComponent';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
