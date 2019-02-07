import { EngineerComponent } from './pages/engineer/engineer.component';
import { EwoListComponent } from './common/EWo/ewo-list/ewo-list.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateEwoComponent } from './common/EWo/create-ewo/create-ewo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'ewo', pathMatch: 'full' },
  { path: 'ewo', component: EwoListComponent },
  { path: 'create', component: CreateEwoComponent },
  { path: 'edit/:ewoId', component: CreateEwoComponent },
  { path: 'eng', component: EngineerComponent },
  { path: 'admin', component: AdminComponent },

  { path: '**', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
