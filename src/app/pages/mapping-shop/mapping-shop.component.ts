import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-mapping-shop',
  templateUrl: './mapping-shop.component.html',
  styleUrls: ['./mapping-shop.component.scss'],
})
export class MappingShopComponent implements OnInit {
  dataSource: any;
  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: [
        'Product_ID',
        'Product_Name',
        'Product_Cost',
        'Product_Sale_Price',
        'Product_Retail_Price',
        'Product_Current_Inventory',
      ],
      filter: ['Product_Current_Inventory', '>', 0],
    };
  }

  ngOnInit(): void {}
}
