import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarnComponent } from './barn/barn.component';
import { HomeComponent } from './home/home.component';
import { HorseDetailComponent } from './barn/horse-detail/horse-detail.component';
import { HorseEditComponent } from './barn/horse-edit/horse-edit.component';
import { HorseListComponent } from './barn/horse-list/horse-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarnComponent,
    HomeComponent,
    HorseDetailComponent,
    HorseEditComponent,
    HorseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
