import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteminforComponent } from './iteminfor.component';

describe('IteminforComponent', () => {
  let component: IteminforComponent;
  let fixture: ComponentFixture<IteminforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteminforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteminforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
