import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private http : HttpClient
  ) {
    this.getDepartamentos();
  }

  getDepartamentos(): Observable<Object> {
    const URL_API = `${environment.apiUrl}/ObtenerDepartamentos`;
    const PAYLOAD: any = {}
    return this.http.get(URL_API, PAYLOAD);
  }

  getMunicipios (idDepartamento:any): Observable<Object> {
    const URL_API = `${environment.apiUrl}/ObtenerMunicipios/${idDepartamento}`;
    const PAYLOAD: any = {}
    return this.http.get(URL_API, PAYLOAD);
  }

  getActividades (): Observable<Object> {
    const URL_API = `${environment.apiUrl}/ObtenerData`;
    const PAYLOAD: any = {}
    return this.http.get(URL_API, PAYLOAD)
  }
}
