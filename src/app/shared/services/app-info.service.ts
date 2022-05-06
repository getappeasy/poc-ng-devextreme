import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Poc Ng Devextreme';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
