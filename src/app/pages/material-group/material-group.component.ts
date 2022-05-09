import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MaterialGroupService } from '../../shared/services/material-group.service';
import { IRespRmProductGroup, IRmProductGroup } from './material-group';
import { exportDataGrid } from 'devextreme/excel_exporter';

@Component({
  selector: 'app-materia-group',
  templateUrl: './material-group.component.html',
  styleUrls: ['./material-group.component.scss'],
})
export class MaterialGroupComponent implements OnInit {
  materialGroups!: IRmProductGroup[];
  materialGroups$!: Observable<IRmProductGroup[]>;
  constructor(private materialGroupService: MaterialGroupService) {
    this.materialGroups$ = this.materialGroupService.materialGroups$;
  }

  ngOnInit(): void {
    this.materialGroupService.materialGroups$.subscribe((materialGroups) => {
      this.materialGroups = materialGroups;
      console.log(materialGroups);
    });
  }
}
