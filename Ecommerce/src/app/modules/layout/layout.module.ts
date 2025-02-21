import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homepage';
import { CoreModule } from '@app/core/core.module';
import { ProductPageComponent } from './productpage';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page';
import { ProductModule } from '../product';
import { SearchPageComponent } from './searchpage';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    data: { title: 'Product Page' },
  },
  {
    path: 'search/:id',
    component: SearchPageComponent,
    data: { title: 'Search Page' },
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./lazyloaded-modules/login/login.module').then(
  //       (m) => m.LoginModule
  //     ),
  // },
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  exports: [RouterModule],
  declarations: [HomePageComponent, ProductPageComponent, SearchPageComponent],
  providers: [],
})
export class LayoutModule {}
