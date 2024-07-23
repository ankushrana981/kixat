import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListCarouselComponent } from './category-list-carousel.component';

describe('CategoryListCarouselComponent', () => {
  let component: CategoryListCarouselComponent;
  let fixture: ComponentFixture<CategoryListCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
