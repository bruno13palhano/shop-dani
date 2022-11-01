import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchListComponent } from './product-search-list.component';

describe('ProductSearchListComponent', () => {
  let component: ProductSearchListComponent;
  let fixture: ComponentFixture<ProductSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
