import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchField: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchProducts(): void {
    this.router.navigate(['/search', this.searchField]);
  }
}
