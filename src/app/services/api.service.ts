import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable()
export class ApiService {
  private notes : Note[] = [];

  constructor() { }

  add(note: Note): number {
    this.notes.push(note);
    return this.notes.length - 1;
  }

  remove(idx: number): void {
    this.notes.splice(idx, 1);
  }

  change(idx: number, note: Note): void {
    this.notes[idx] = note;
  }

  get(idx?: number): Note | Note[] {
    if(idx === undefined) {
      return this.notes.slice().map(v => new Note(v.title, v.content));
    } else {
      return new Note(this.notes[idx].title, this.notes[idx].content);
    }
  }
}
