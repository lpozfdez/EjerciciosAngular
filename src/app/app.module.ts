import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DisplayModule } from './display/display.module';
import { SharedModule } from './shared/shared.module';
import { ComunicationModule } from './comunication/comunication.module';
import { CrudModule } from './crud/crud.module';
import { SearchUniversityModule } from './search-university/search-university.module';
import { LightSwitchModule } from './light-switch/light-switch.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DisplayModule,
    SharedModule,
    ComunicationModule,
    CrudModule,
    SearchUniversityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
