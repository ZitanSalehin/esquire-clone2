import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderOneComponent } from './product-slider-one.component';

describe('ProductSliderOneComponent', () => {
  let component: ProductSliderOneComponent;
  let fixture: ComponentFixture<ProductSliderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSliderOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSliderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
