import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingShopComponent } from './mapping-shop.component';

describe('MappingShopComponent', () => {
  let component: MappingShopComponent;
  let fixture: ComponentFixture<MappingShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
