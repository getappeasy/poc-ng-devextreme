import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeptComponent } from './material-dept.component';

describe('MaterialDeptComponent', () => {
  let component: MaterialDeptComponent;
  let fixture: ComponentFixture<MaterialDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
