import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { EwoListComponent } from './common/EWo/ewo-list/ewo-list.component';
import { LoginComponent } from './common/admin/login/login.component';
import { CreateEwoComponent } from './common/EWo/create-ewo/create-ewo.component';
import { DetailEwoComponent } from './common/EWo/detail-ewo/detail-ewo.component';
import { UpdateEwoComponent } from './common/EWo/update-ewo/update-ewo.component';
import { EngineerComponent } from './pages/engineer/engineer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserListComponent } from './common/admin/user-list/user-list.component';
import { CreateUserComponent } from './common/admin/create-user/create-user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'ewos', pathMatch: 'full' },
  { path: 'ewos', component: EwoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateEwoComponent },
  { path: 'detail/:ewoId', component: DetailEwoComponent },
  { path: 'update/:ewoId', component: UpdateEwoComponent },
  { path: 'users', component: UserListComponent },
  { path: 'usercreate', component: CreateUserComponent },
  { path: 'useredit/:userId', component: CreateUserComponent },
  { path: 'eng', component: EngineerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'oops', component: NotFoundComponent },

  { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
