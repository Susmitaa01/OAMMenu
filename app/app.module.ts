import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './_Components/home-page/home-page.component';
import { UniversityListComponent } from './_Components/university-list/university-list.component';

import { UniversityService } from './_services/university.service';
import { CollegeListComponent } from './_Components/college-list/college-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UniversityListComponent,
    CollegeListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UniversityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
