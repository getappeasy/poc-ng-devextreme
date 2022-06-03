import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  DxBulletModule,
  DxDataGridModule,
  DxFormModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxRadioGroupModule,
  DxButtonModule,
  DxChartModule,
} from 'devextreme-angular';
import { AppData } from '../app/app-data';
import { GlobalComponent } from './pages/global/global.component';
import { MappingShopComponent } from './pages/mapping-shop/mapping-shop.component';
import { MaterialGroupComponent } from './pages/material-group/material-group.component';
import { MaterialDeptComponent } from './pages/material-dept/material-dept.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SaleReportComponent } from './pages/material-dept/sale-report/sale-report.component';

const routes: Routes = [
  {
    path: 'material-group',
    component: MaterialGroupComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'material-dept',
    component: MaterialDeptComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'shop',
    component: MappingShopComponent,
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
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    DxBulletModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxRadioGroupModule,
    DxButtonModule,
    DxChartModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
  ],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    GlobalComponent,
    MappingShopComponent,
    MaterialGroupComponent,
    MaterialDeptComponent,
    SaleReportComponent,
  ],
})
export class AppRoutingModule {}
