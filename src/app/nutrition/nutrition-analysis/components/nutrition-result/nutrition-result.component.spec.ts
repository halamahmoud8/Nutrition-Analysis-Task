import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionResultComponent } from './nutrition-result.component';

describe('NutritionResultComponent', () => {
  let component: NutritionResultComponent;
  let fixture: ComponentFixture<NutritionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
