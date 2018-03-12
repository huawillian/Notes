import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.notes = this.apiService.get() as Note[];
  }

  view(i) {
    // route to idx to show details
  }

  remove(i) {
    this.apiService.remove(i);
    this.notes = this.apiService.get() as Note[];
  }

  addNew() {
    let idx = this.apiService.add(new Note());
    this.notes = this.apiService.get() as Note[];
    // then route to idx to show details
  }

}
