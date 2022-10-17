import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmaDialogueComponent } from './confirma-dialogue/confirma-dialogue.component';
import { PersonaModalComponent } from './persona-modal/persona-modal.component';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  displayedColumns = ['idPersona', 'nombres', 'apellidos', 'edad', 'pais', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Persona>;
  persona!: Persona[];

  constructor(
    private dialog: MatDialog,
    private personaService: PersonaService) { }

  ngOnInit(): void {

    this.personaService.listar().subscribe(data => {
    this.dataSource = new MatTableDataSource(data)
    });

    this.personaService.personaActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })

  }

  openModal(persona?: Persona){

    let person = persona != null ? persona : new Persona();

    this.dialog.open(PersonaModalComponent, {
      width: '300px',
      data: person
    });
  }


  onDelete(id:number){
    let dialogRef = this.dialog.open(ConfirmaDialogueComponent,{
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
        this.personaService.eliminar(id).subscribe(() => {
          this.personaService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data)
          })
        })
      }
    })
  }

}
