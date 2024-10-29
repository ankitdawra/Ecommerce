import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './lazyloaded-modules/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   // redirectTo: '',
  //   // pathMatch: 'full',
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./lazyloaded-modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
