import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';          // template drive forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// common
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { EwoListComponent } from './common/EWo/ewo-list/ewo-list.component';
import { CreateEwoComponent } from './common/EWo/create-ewo/create-ewo.component';
import { LoginComponent } from './common/login/login.component';
// pages
import { EngineerComponent } from './pages/engineer/engineer.component';
// services
import { EwoService } from './service/ewo.service';
import { UserService } from './service/user.service';
import { ConfirmEqualDirective } from './_helpers/confirm-equal.directive';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateUserComponent } from './common/admin/create-user/create-user.component';
import { UserListComponent } from './common/admin/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    EwoListComponent,
    LoginComponent,
    CreateEwoComponent,
    EngineerComponent,
    ConfirmEqualDirective,
    NotFoundComponent,
    CreateUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
