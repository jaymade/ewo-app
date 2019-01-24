import { AdminComponent } from './pages/admin/admin.component';
import { EditEwoComponent } from './pages/edit-ewo/edit-ewo.component';
import { CreateEwoComponent } from './pages/create-ewo/create-ewo.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateEwoComponent },
  { path: 'edit', component: EditEwoComponent },
  { path: 'admin', component: AdminComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
