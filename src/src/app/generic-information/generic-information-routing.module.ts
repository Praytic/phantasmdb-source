import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericInformationIndexComponent } from './generic-information-index/generic-information-index.component';
import { GenericInformationStatListComponent } from './generic-information-stat-list/generic-information-stat-list.component';

const routes: Routes = [
  {
    path: '',
    component: GenericInformationIndexComponent
  },
  {
    path: 'stat-list',
    component: GenericInformationStatListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericInformationRoutingModule { }
