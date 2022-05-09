import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CustomerData } from '../app/pages/material-group/customer-data';
import { Customer } from '../app/pages/material-group/customer';
import { MaterialGroupData } from '../app/pages/material-group/material-group-data';
import { IRespRmProductGroup } from '../app/pages/material-group/material-group';

export class AppData implements InMemoryDbService {
  createDb(): {
    materialGroups: IRespRmProductGroup;
  } {
    const materialGroups = MaterialGroupData.rmProductgroup;

    return { materialGroups };
  }
}
