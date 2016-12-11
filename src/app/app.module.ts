import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpInterceptorModule } from 'angular2-http-interceptor/lib/index';
import { TokenInterceptor } from './data/token-interceptor/token-interceptor';

import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListHeaderComponent } from './contacts-list-header/contacts-list-header.component';
import { ContactsListBodyComponent } from './contacts-list-body/contacts-list-body.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactsListHeaderComponent,
    ContactsListBodyComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HttpInterceptorModule.withInterceptors([TokenInterceptor])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
