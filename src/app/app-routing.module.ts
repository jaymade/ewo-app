import { AuthGuard } from './service/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { EwoListComponent } from './EWo/ewo-list/ewo-list.component';
import { LoginComponent } from './login/login.component';
import { CreateEwoComponent } from './EWo/create-ewo/create-ewo.component';
import { DetailEwoComponent } from './EWo/detail-ewo/detail-ewo.component';
import { UpdateEwoComponent } from './EWo/update-ewo/update-ewo.component';
import { EngineerComponent } from './engineer/engineer.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'ewos', pathMatch: 'full' },
  { path: 'ewos', component: EwoListComponent },
  { path: 'create', component: CreateEwoComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'detail/:ewoId', component: DetailEwoComponent },
  { path: 'update/:ewoId', component: UpdateEwoComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  {
    path: 'usercreate',
    component: CreateUserComponent,
    canActivate: [AuthGuard]
  },
  { path: 'useredit/:userId', component: CreateUserComponent },
  { path: 'eng', component: EngineerComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'oops', component: NotFoundComponent },

  { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
