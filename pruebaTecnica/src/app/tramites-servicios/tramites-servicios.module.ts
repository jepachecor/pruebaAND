import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesServiciosComponent } from './tramites-servicios.component';
import { BannerComponent } from './banner/banner.component';
import { ConsultaTramitesComponent } from './consulta-tramites/consulta-tramites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaDataComponent } from './tabla-data/tabla-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TramitesServiciosComponent,
    BannerComponent,
    ConsultaTramitesComponent,
    TablaDataComponent],
  exports: [
    TramitesServiciosComponent]
})
export class TramitesServiciosModule { }
