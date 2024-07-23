import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddresssesEmptyComponent } from './my-addressses-empty.component';

describe('MyAddresssesEmptyComponent', () => {
  let component: MyAddresssesEmptyComponent;
  let fixture: ComponentFixture<MyAddresssesEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAddresssesEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAddresssesEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
