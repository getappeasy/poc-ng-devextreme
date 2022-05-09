export interface MaterialGroup {
  check: boolean;
  rmCategory: string;
  rmCategoryName: string;
  rmGroup: string;
}

export interface IRmProductGroup {
  RecordNo: number;
  ProductGroupRMID: number;
  ProductGroupRMCode: string;
  ProductGroupRMName: string;
  VAT: number;
  Activated: number;
}

export interface IRespRmProductGroup {
  ResponseCode: string;
  ResponseText: string;
  ResponseObj: IRmProductGroup[];
}
