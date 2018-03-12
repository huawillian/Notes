import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input('note') note: Note;
  @Output('view') viewEvent = new EventEmitter();
  @Output('remove') removeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
