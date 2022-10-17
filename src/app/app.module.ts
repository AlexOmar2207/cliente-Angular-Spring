import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './views/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmaDialogueComponent } from './views/persona/confirma-dialogue/confirma-dialogue.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonaModalComponent } from './views/persona/persona-modal/persona-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ConfirmaDialogueComponent,
    PersonaModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
