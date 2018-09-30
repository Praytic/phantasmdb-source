import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericInformationRoutingModule } from './generic-information-routing.module';
import { GenericInformationIndexComponent } from './generic-information-index/generic-information-index.component';
import { GenericInformationStatListComponent } from './generic-information-stat-list/generic-information-stat-list.component';

@NgModule({
  imports: [
    CommonModule,
    GenericInformationRoutingModule
  ],
  declarations: [GenericInformationIndexComponent, GenericInformationStatListComponent]
})
export class GenericInformationModule { }
