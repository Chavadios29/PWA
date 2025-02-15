import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'loading', loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'loading-success', loadChildren: () => import('./pages/loading-success/loading-success.module').then(m => m.LoadingSuccessPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
