import {NgModule} from '@angular/core';
import {PeriscopeAppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter, RouterModule} from '@angular/router';
import {FIREBASE_PROVIDERS, FirebaseUrl, FirebaseAppConfig, AuthProviders, AuthMethods, FirebaseAuthConfig} from 'angularfire2';

const routes = [
  {
    path: '/triage_pr',
    component: './app/+triage-pr',
  },
  {path: '/sync', component: './app/+sync'}
];


@NgModule({
  declarations: [PeriscopeAppComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [
    provideRouter(routes),
    FIREBASE_PROVIDERS,
    // HTTP_PROVIDERS,
    {provide: FirebaseUrl, useValue: 'https://ngperiscope.firebaseio.com'}, {
      provide: FirebaseAuthConfig,
      useValue: {provider: AuthProviders.Github, method: AuthMethods.Popup}
    },
  ],
  entryComponents: [PeriscopeAppComponent]
})
export class PeriscopeModule { }
