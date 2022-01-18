import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-tabla-data',
  templateUrl: './tabla-data.component.html',
  styleUrls: ['./tabla-data.component.css']
})
export class TablaDataComponent implements OnInit {

  listaDeActividades: any;

  constructor(
    private dataServiceService: DataServiceService
  ) { }

  ngOnInit() {
    this.getActividades()
  }

  async getActividades() {
    this.listaDeActividades = await this.dataServiceService.getActividades().toPromise();
  }

}
