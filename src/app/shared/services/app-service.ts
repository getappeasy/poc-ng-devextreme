import { Injectable } from '@angular/core';

export class Employee {
  ID!: number;
  POSShopCode!: string;
  POSShopName!: string;
  RMShopCode!: string;
}

const employees: Employee[] = [
  {
    ID: 1,
    POSShopCode: '0001',
    POSShopName: 'Cafe Amazon สาขาแจ้งวัฒนะ',
    RMShopCode: '',
  },
  {
    ID: 2,
    POSShopCode: '0002',
    POSShopName: 'Cafe Amazon สาขาอโศก',
    RMShopCode: '',
  },
  {
    ID: 3,
    POSShopCode: '0003',
    POSShopName: 'Cafe Amazon สาขาจตุจักร',
    RMShopCode: '',
  },
  {
    ID: 4,
    POSShopCode: '0004',
    POSShopName: 'Cafe Amazon สาขาเมืองทอง',
    RMShopCode: '',
  },
  {
    ID: 5,
    POSShopCode: '0005',
    POSShopName: 'Cafe Amazon สาขาปากเกร็ด',
    RMShopCode: '',
  },
  {
    ID: 6,
    POSShopCode: '0006',
    POSShopName: 'Cafe Amazon สาขาบางบัวทอง',
    RMShopCode: '',
  },
  {
    ID: 7,
    POSShopCode: '0007',
    POSShopName: 'Cafe Amazon สาขาสงขา',
    RMShopCode: '',
  },
  {
    ID: 8,
    POSShopCode: '0008',
    POSShopName: 'Cafe Amazon สาขาเขาใหญ่',
    RMShopCode: '',
  },
  {
    ID: 9,
    POSShopCode: '0009',
    POSShopName: 'Cafe Amazon สาขาบางนา',
    RMShopCode: '',
  },
  {
    ID: 10,
    POSShopCode: '0010',
    POSShopName: 'Cafe Amazon สาขาพระราม 9',
    RMShopCode: '',
  },
];

@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;
  }
}
