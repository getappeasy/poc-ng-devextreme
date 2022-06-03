import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-material-dept',
  templateUrl: './material-dept.component.html',
  styleUrls: ['./material-dept.component.scss'],
})
export class MaterialDeptComponent implements OnInit {
  languages: string[] = [
    'Arabic: Right-to-Left direction',
    'English: Left-to-Right direction',
  ];
  priorities = ['Reported By Bill', 'Reported By Products'];
  priorities02 = ['Line Chart', 'Column Chart'];
  optionsSelect = [
    { id: 1, description: '' },
    { id: 2, description: '' },
    { id: 3, description: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
