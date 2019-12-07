import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {


  formularioRegistroVeterinario:FormGroup; // IMPORTAR FormGroup DESDE  APP.MODULE.TS

  readonly rootURL = 'http://localhost:49196/api';
  veterinario:VeterinarioService; // objeto tipo Usuario
  filtroVeterinario:''
  
  listaVeterinario: VeterinarioService[];

  constructor(private http:HttpClient) { {
    
  } }
}
