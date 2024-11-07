import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homepage';
import { CoreModule } from '@app/core/core.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
  imports: [CoreModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomePageComponent],
  providers: [],
})
export class LayoutModule {}
