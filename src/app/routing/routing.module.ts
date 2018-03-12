import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from '../notes/notes.component';
import { DetailsComponent } from '../details/details.component';

const appRoutes: Routes = [
  { path: 'details/:id',      component: DetailsComponent },
  { path: '',
    component: NotesComponent,
    pathMatch: 'full'
  },
  { path: '**', component: NotesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
