import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AppConfig } from './configs/app.config';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: AppConfig.routes.account, loadChildren: './modules/account/account.module#AccountModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
