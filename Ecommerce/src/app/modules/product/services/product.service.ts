import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services';
import { from, of } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private httpService: HttpService) {}
  getProductByCode(code: any) {
    return this.httpService.get(`/product/${code}`);
    // return of({
    //   name: 'Product 1',
    //   gallery: [
    //     '/assets/product-1.jpg',
    //     '/assets/product-1.jpg',
    //     '/assets/product-1.jpg',
    //     '/assets/product-1.jpg',
    //   ],
    //   price: 100,
    //   stockStatus: 'In Stock',
    //   code: 'BP_ABC',
    //   tags: ['tag1', 'tag2'],
    //   category: 'Category 1',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   features: ['Feature 1', 'Feature 2'],
    //   variants: [
    //     {
    //       price: 100,
    //       stockStatus: 'In Stock',
    //       code: 'ABC1',
    //       type: 'color_variant',
    //       color: 'Red',
    //     },
    //     {
    //       price: 200,
    //       stockStatus: 'Out of Stock',
    //       code: 'ABC2',
    //       type: 'color_variant',
    //       color: 'Blue',
    //     },
    //     {
    //       price: 300,
    //       stockStatus: 'In Stock',
    //       code: 'ABC3',
    //       type: 'size_variant',
    //       size: 'XL',
    //     },
    //     {
    //       price: 400,
    //       stockStatus: 'Out of Stock',
    //       code: 'ABC4',
    //       type: 'size_variant',
    //       size: 'XXL',
    //     },
    //   ],
    //   // colorOptions: [ 'Red', 'Blue' ],
    // });
  }
}
