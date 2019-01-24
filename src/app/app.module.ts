import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateEwoComponent } from './pages/create-ewo/create-ewo.component';
import { EditEwoComponent } from './pages/edit-ewo/edit-ewo.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavComponent } from './common/nav/nav.component';
import { EwoListComponent } from './common/ewo-list/ewo-list.component';
import { LoginComponent } from './common/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    HomeComponent,
    CreateEwoComponent,
    EditEwoComponent,
    AdminComponent,
    NavComponent,
    EwoListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
