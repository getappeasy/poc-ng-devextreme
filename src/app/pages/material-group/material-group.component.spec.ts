import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupComponent } from './material-group.component';

describe('MateriaGroupComponent', () => {
  let component: MaterialGroupComponent;
  let fixture: ComponentFixture<MaterialGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
