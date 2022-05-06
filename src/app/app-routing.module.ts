import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DataTableComponent } from './pages/data-table/data-table.component';
import { DataGridComponent } from './pages/data-grid/data-grid.component';

const routes: Routes = [
  {
    path: 'pages/data-grid',
    component: DataGridComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'dataTable',
    component: DataTableComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    DataTableComponent,
    DataGridComponent,
  ],
})
export class AppRoutingModule {}
