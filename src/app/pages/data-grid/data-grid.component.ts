import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule } from 'devextreme-angular';
import { Employee, Service } from 'src/app/shared/services/app-service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  providers: [Service],
})
export class DataGridComponent {
  employees: Employee[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }
}
