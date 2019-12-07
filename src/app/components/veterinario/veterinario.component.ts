import { Component, OnInit } from '@angular/core';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {

  constructor(public registroVeterinario:VeterinarioService) { }

  ngOnInit() {
    this.registroVeterinario.formularioRegistroVeterinario
  }

}
