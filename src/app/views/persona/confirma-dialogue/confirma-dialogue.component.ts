import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirma-dialogue',
  templateUrl: './confirma-dialogue.component.html',
  styleUrls: ['./confirma-dialogue.component.css']
})
export class ConfirmaDialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmaDialogueComponent>
  ) { }

  ngOnInit(): void {

  }

  onEliminar(){
    this.dialogRef.close(true)
  }

  onCancelar(){
    this.dialogRef.close(false)
  }


}
