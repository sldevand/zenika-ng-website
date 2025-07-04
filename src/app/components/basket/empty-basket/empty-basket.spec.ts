import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBasket } from './empty-basket';

describe('EmptyBasket', () => {
  let component: EmptyBasket;
  let fixture: ComponentFixture<EmptyBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyBasket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyBasket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
