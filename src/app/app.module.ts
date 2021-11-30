import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {SetupDateComponent} from './date/setup-date/setup-date.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileGalleryComponent} from "./layout/profile-gallery/profile-gallery.component";
import {NameFilterPipe} from "./layout/pipes/name-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SetupDateComponent,
    ProfileGalleryComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
