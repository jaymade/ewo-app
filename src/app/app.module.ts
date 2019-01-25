import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// common
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { EditEwoComponent } from './common/EWo/edit-ewo/edit-ewo.component';
import { EwoListComponent } from './common/EWo/ewo-list/ewo-list.component';
import { CreateEwoComponent } from './common/EWo/create-ewo/create-ewo.component';
import { EwoDetailComponent } from './common/EWo/ewo-detail/ewo-detail.component';
import { LoginComponent } from './common/login/login.component';
// pages
import { UserComponent } from './pages/user/user.component';
import { EngineerComponent } from './pages/engineer/engineer.component';
import { AdminComponent } from './pages/admin/admin.component';
// services
import { EwoService } from './service/ewo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditEwoComponent,
    AdminComponent,
    NavComponent,
    EwoListComponent,
    LoginComponent,
    CreateEwoComponent,
    EwoDetailComponent,
    EngineerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [EwoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
