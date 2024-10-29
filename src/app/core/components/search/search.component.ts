import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchField: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  searchProducts(): void {
    console.log('search', this.searchField);
    this.searchService.searchProducts(this.searchField).subscribe((data) => {
      console.log('data', data);
    });
  }
}
