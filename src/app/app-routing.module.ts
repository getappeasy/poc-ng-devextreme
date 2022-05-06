import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  DxBulletModule,
  DxDataGridModule,
  DxFormModule,
} from 'devextreme-angular';
import { GlobalComponent } from './pages/global/global.component';
import { MappingShopComponent } from './pages/mapping-shop/mapping-shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: MappingShopComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'global',
    component: GlobalComponent,
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
  ],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    GlobalComponent,
    MappingShopComponent,
  ],
})
export class AppRoutingModule {}
