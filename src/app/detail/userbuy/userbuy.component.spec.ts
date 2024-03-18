import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbuyComponent } from './userbuy.component';

describe('UserbuyComponent', () => {
  let component: UserbuyComponent;
  let fixture: ComponentFixture<UserbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
