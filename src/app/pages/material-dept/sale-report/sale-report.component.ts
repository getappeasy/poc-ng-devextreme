import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.scss'],
})
export class SaleReportComponent implements OnInit {
  totalSale!: number;
  mocData = [
    {
      Date: '24-09-2020',
      Day: 24,
      Bill: 2,
      TotalPrice: 100,
      Disc: 0,
      Sc: 0,
      TotalSale: 110,
      VatAble: 100,
      TotalVat: 10,
      Cash: 110,
      AliPay: 0,
      WeChat: 0,
      TotalPayment: 110,
      Diff: 0,
    },
    {
      Date: '25-09-2020',
      Day: 25,
      Bill: 1,
      TotalPrice: 200,
      Disc: 50,
      Sc: 0,
      TotalSale: 165,
      VatAble: 150,
      TotalVat: 15,
      Cash: 165,
      AliPay: 0,
      WeChat: 0,
      TotalPayment: 165,
      Diff: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
