import { Directive, HostListener, Input } from '@angular/core';
import { Category } from './models/models';
import { Router } from '@angular/router';

@Directive({
  selector: '[OpenProducts]'
})
export class OpenProductsDirective {
  @Input() category:Category={
    id:0,
    category:'',
    subcategory:'',
  };

  @HostListener('click') openProducts() {
    this.router.navigate(['/product'], {
      queryParams: {
        category: this.category.category,
        subcategory: this.category.subcategory,
      },
    });
  }

  constructor(private router:Router) { }

}
