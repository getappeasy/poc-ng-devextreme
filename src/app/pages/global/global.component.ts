import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/services/global.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  providers: [Service],
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent {
  dataSource: DataSource;

  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo: any) => ({
    text: `${parseInt(pointsInfo.originalValue)}%`,
  });

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }
}
