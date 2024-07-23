import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingBannerComponent } from './shiping-banner.component';

describe('ShipingBannerComponent', () => {
  let component: ShipingBannerComponent;
  let fixture: ComponentFixture<ShipingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
