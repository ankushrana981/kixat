import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCartComponent } from './inner-cart.component';

describe('InnerCartComponent', () => {
  let component: InnerCartComponent;
  let fixture: ComponentFixture<InnerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
