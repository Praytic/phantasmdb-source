import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule'
  },
  {
    path: 'generic-information',
    loadChildren: './generic-information/generic-information.module#GenericInformationModule'
  },
  {
    path: 'not-found',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
