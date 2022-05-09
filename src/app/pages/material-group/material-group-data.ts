import {
  MaterialGroup,
  IRmProductGroup,
  IRespRmProductGroup,
} from '../material-group/material-group';

// export class MaterialGroupData {
//   static MaterialGroups: MaterialGroup[] = [
//     {
//       check: true,
//       rmCategory: '80',
//       rmCategoryName: 'Uniform',
//       rmGroup: '010RM',
//     },
//     {
//       check: true,
//       rmCategory: '130',
//       rmCategoryName: 'OperatingSupply',
//       rmGroup: '010RM',
//     },
//     {
//       check: true,
//       rmCategory: '145',
//       rmCategoryName: 'FoodOperatingSupply',
//       rmGroup: '010RM',
//     },
//     {
//       check: true,
//       rmCategory: 'FIX',
//       rmCategoryName: 'Fixed  Asset',
//       rmGroup: '010RM',
//     },
//     {
//       check: true,
//       rmCategory: 'AMZ',
//       rmCategoryName: 'Amazon 14',
//       rmGroup: '014RM',
//     },
//     {
//       check: true,
//       rmCategory: 'JET',
//       rmCategoryName: 'Jet spray',
//       rmGroup: '014RM',
//     },
//     {
//       check: true,
//       rmCategory: 'POS',
//       rmCategoryName: 'Post mix',
//       rmGroup: '014RM',
//     },
//     {
//       check: true,
//       rmCategory: 'FRU',
//       rmCategoryName: 'Fruit',
//       rmGroup: '018RM',
//     },
//     {
//       check: true,
//       rmCategory: 'GEN',
//       rmCategoryName: 'General',
//       rmGroup: '018RM',
//     },
//     {
//       check: true,
//       rmCategory: 'SAL',
//       rmCategoryName: 'Salad',
//       rmGroup: '018RM',
//     },
//     {
//       check: true,
//       rmCategory: 'BAK',
//       rmCategoryName: 'Bakery',
//       rmGroup: '019RM',
//     },
//     {
//       check: true,
//       rmCategory: 'BER',
//       rmCategoryName: 'Bread',
//       rmGroup: '019RM',
//     },
//     {
//       check: true,
//       rmCategory: 'CAK',
//       rmCategoryName: 'Cake',
//       rmGroup: '019RM',
//     },
//     {
//       check: true,
//       rmCategory: 'CAT',
//       rmCategoryName: 'Catering',
//       rmGroup: '019RM',
//     },
//     {
//       check: true,
//       rmCategory: 'COO',
//       rmCategoryName: 'Cookie',
//       rmGroup: '019RM',
//     },
//     {
//       check: true,
//       rmCategory: 'CRA',
//       rmCategoryName: 'Cracker',
//       rmGroup: '019RM',
//     },
//     {
//       check: true,
//       rmCategory: 'DRK',
//       rmCategoryName: 'DrinkingWater',
//       rmGroup: '025RM',
//     },
//     {
//       check: true,
//       rmCategory: 'LOM',
//       rmCategoryName: 'Local Mineral Water',
//       rmGroup: '025RM',
//     },
//     {
//       check: true,
//       rmCategory: 'AMZ',
//       rmCategoryName: 'Amazon',
//       rmGroup: '025RM',
//     },
//     {
//       check: true,
//       rmCategory: 'BUR',
//       rmCategoryName: 'Burger',
//       rmGroup: '040RM',
//     },
//     {
//       check: true,
//       rmCategory: 'RIC',
//       rmCategoryName: 'Rice',
//       rmGroup: '040RM',
//     },
//   ];
// }

export class MaterialGroupData {
  static rmProductgroup: IRespRmProductGroup = {
    ResponseCode: '',
    ResponseText: '',
    ResponseObj: [
      {
        RecordNo: 1,
        ProductGroupRMID: 1,
        ProductGroupRMCode: '010',
        ProductGroupRMName: '10 Operating Supply',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 2,
        ProductGroupRMID: 1,
        ProductGroupRMCode: '010',
        ProductGroupRMName: '10 Uniform',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 3,
        ProductGroupRMID: 1,
        ProductGroupRMCode: '010',
        ProductGroupRMName: '10 FoodOperatingSupply',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 4,
        ProductGroupRMID: 2,
        ProductGroupRMCode: '014',
        ProductGroupRMName: '14 Post Mix/Jet Spray',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 5,
        ProductGroupRMID: 5,
        ProductGroupRMCode: '018',
        ProductGroupRMName: '18 TV Dinner',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 6,
        ProductGroupRMID: 6,
        ProductGroupRMCode: '019',
        ProductGroupRMName: '19 Biscuit/Fresh Bakery',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 7,
        ProductGroupRMID: 3,
        ProductGroupRMCode: '025',
        ProductGroupRMName: '25 Juice/Bottled Water',
        VAT: 7,
        Activated: 1,
      },
      {
        RecordNo: 8,
        ProductGroupRMID: 4,
        ProductGroupRMCode: '040',
        ProductGroupRMName: '40 Fresh Food',
        VAT: 7,
        Activated: 1,
      },
    ],
  };
}
