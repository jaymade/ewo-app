import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { CreateUserComponent } from './common/admin/create-user/create-user.component';
import { UserListComponent } from './common/admin/user-list/user-list.component';
import { EngineerComponent } from './pages/engineer/engineer.component';
import { CreateEwoComponent } from './common/EWo/create-ewo/create-ewo.component';
import { EwoListComponent } from './common/EWo/ewo-list/ewo-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'ewos', pathMatch: 'full' },
  { path: 'ewos', component: EwoListComponent },
  { path: 'ewocreate', component: CreateEwoComponent },
  { path: 'ewoedit/:ewoId', component: CreateEwoComponent },
  { path: 'users', component: UserListComponent },
  { path: 'usercreate', component: CreateUserComponent },
  { path: 'useredit/:userId', component: CreateUserComponent },
  { path: 'eng', component: EngineerComponent },
  { path: 'oops', component: NotFoundComponent },

  { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
