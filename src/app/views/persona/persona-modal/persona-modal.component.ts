import { Component, OnInit, Inject } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from '../../../service/persona.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pais } from 'src/app/model/pais';
import { PaisService } from '../../../service/pais.service';
import { PersonaComponent } from '../persona.component';

@Component({
  selector: 'app-persona-modal',
  templateUrl: './persona-modal.component.html',
  styleUrls: ['./persona-modal.component.css']
})
export class PersonaModalComponent implements OnInit {

  persona!: Persona;
  pais!: Pais[];


  constructor(
    private dialogRef: MatDialogRef<PersonaComponent>,
    private PaisService: PaisService,
    private PersonaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) private data: Persona) { }

  ngOnInit(): void {

    this.persona = new Persona();
    this.persona.idPersona = this.data.idPersona;
    this.persona.nombres = this.data.nombres;
    this.persona.apellidos = this.data.apellidos;
    this.persona.edad = this.data.edad;
    this.persona.pais = this.data.pais;

    this.PaisService.listar().subscribe(data =>{
      this.pais = data;
    })
  }


  aceptar(){
    // Programacion Reactiva
    if(this.persona != null && this.persona.idPersona > 0){
      this.PersonaService.editar(this.persona).subscribe(() => {
        return this.PersonaService.listar().subscribe(data => {
          this.PersonaService.personaActualizar.next(data);
        })
      })
    }else{
      this.PersonaService.registrar(this.persona).subscribe(() => {
        this.PersonaService.listar().subscribe(data => {
          this.PersonaService.personaActualizar.next(data);
        })
      })
    }
    this.cancelar();
  }

  cancelar(){
    this.dialogRef.close();
  }



}
