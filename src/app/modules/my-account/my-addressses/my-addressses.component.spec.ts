import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddresssesComponent } from './my-addressses.component';

describe('MyAddresssesComponent', () => {
  let component: MyAddresssesComponent;
  let fixture: ComponentFixture<MyAddresssesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAddresssesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAddresssesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
