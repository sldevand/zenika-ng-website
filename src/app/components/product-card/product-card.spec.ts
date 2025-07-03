import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    fixture.componentRef.setInput('product', {
      id: "1",
      title: "test title",
      description: "test description",
      photo: 'path/to/test.jpg',
      price: 25,
      stock: 3
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const cardHeaderSmall = (fixture.nativeElement as HTMLElement).querySelector('small');
    expect(cardHeaderSmall?.textContent).toBe(component.product().title);
  });
 
  it('should emit addTobasket Event when click on button', () => {
    const emitSpy = spyOn(component.addToBasket, 'emit');
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();
    expect(emitSpy).toHaveBeenCalledWith(component.product());
  });
});
