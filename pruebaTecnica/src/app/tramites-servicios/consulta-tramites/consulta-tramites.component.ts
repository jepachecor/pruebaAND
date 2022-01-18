import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DepartamentoInterface } from 'src/app/models/departamento.interface';
import { MunicipioInterface } from 'src/app/models/municipio.interface';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-consulta-tramites',
  templateUrl: './consulta-tramites.component.html',
  styleUrls: ['./consulta-tramites.component.css']
})
export class ConsultaTramitesComponent implements OnInit {

  listaDeDepartamentos: any;
  listaDeMunicipios: any;
  listaDeActividades: any;
  depCodigo: any;
  munCodigo: any;
  dataForm: FormGroup;

  constructor(
    private dataServiceService: DataServiceService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.getDepartamentos();
    this.dataForm = this._formBuilder.group({
      depCodigo: new FormControl(),
      munCodigo: new FormControl(),
  });
}

  async getDepartamentos() {
    this.listaDeDepartamentos = await this.dataServiceService.getDepartamentos().toPromise();
  }

  async getMunicipios() {
  if(this.depCodigo){
    this.listaDeMunicipios = await this.dataServiceService.getMunicipios(this.depCodigo).toPromise();
    }
  }

  async getActividades() {
    this.listaDeActividades = await this.dataServiceService.getActividades().toPromise();
  }

}
