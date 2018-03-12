import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { ApiService } from './services/api.service';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
