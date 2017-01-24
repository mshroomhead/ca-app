import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ApiInstantiator } from './data/ApiInstantiator';
import { MpBlurredScroll } from 'mp-blurred-scroll';
import { ContactsListPipe } from './contacts-list/contacts-list.pipe';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { LoginService } from './login.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpInterceptorModule } from 'angular2-http-interceptor';
import { TokenInterceptor } from './data/token/token-interceptor';
import { TokenResource } from './data/token/token-resource';
import { HttpInterceptor } from './data/token/http-interceptor';

const routes : Routes = [];

export function httpInterceptorFactory (xhrBackend : XHRBackend, requestOptions : RequestOptions) : Http {
  return new HttpInterceptor(xhrBackend, requestOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    MpBlurredScroll,
    ContactsListPipe,
    ContactEditComponent
  ],
  entryComponents: [
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    // HttpInterceptorModule.withInterceptors([TokenInterceptor])
  ],
  providers: [
    ApiInstantiator,
    DomSanitizerImpl,
    LoginService,
    TokenResource,
    {
      provide: Http,
      useFactory: httpInterceptorFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
