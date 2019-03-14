import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // template drive forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// common
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { EwoListComponent } from './EWo/ewo-list/ewo-list.component';
import { CreateEwoComponent } from './EWo/create-ewo/create-ewo.component';
import { LoginComponent } from './login/login.component';
// pages
import { EngineerComponent } from './engineer/engineer.component';
import { UpdateEwoComponent } from './EWo/update-ewo/update-ewo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
// services
import { EwoService } from './service/ewo.service';
import { UserService } from './service/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// custom validators
import { ConfirmEqualDirective } from './_helpers/confirm-equal.directive';
import { SelectReqValidDirective } from './_helpers/select-req-valid.directive';
import { DetailEwoComponent } from './EWo/detail-ewo/detail-ewo.component';
import { AdminComponent } from './admin/admin.component';

// import { AuthInterceptor } from './common/admin/auth-interceptor';

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
    SelectReqValidDirective,

    NotFoundComponent,
    CreateUserComponent,
    UserListComponent,
    UpdateEwoComponent,
    DetailEwoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
