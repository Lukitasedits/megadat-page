import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import EmpresasInfo from '../../assets/jsons/empresas.json'

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  empresas: Empresa[] = EmpresasInfo;
  constructor() { }
  getEmpresas() : Empresa[]{
    return this.empresas;
  }
}
