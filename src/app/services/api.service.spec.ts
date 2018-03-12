import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Note } from '../models/note.model';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a private notes property', () => {
    expect(service['notes']).toEqual([]);
  });

  it('should have add method which takes in new Note object and returns the idx', () => {
    let testData = ["Apple", "Milk"];

    let note = new Note(...testData);
    service['add'](note);

    expect(service['notes'].length).toBe(1);
    expect(service['notes'][0]).toEqual(new Note(...testData));
  });

  it('should delete a note given the idx', () => {
    let testData = ["Apple", "Milk"];
    let note = new Note(...testData);
    
    service['add'](note);
    service['remove'](0);
    expect(service['notes'].length).toBe(0);
  });

  it('should update note given idx and the new Note object', () => {
    let testData = ["Apple", "Milk"];
    let note = new Note();
    let testNote = new Note(...testData);

    service['add'](note);
    expect(service['notes'].length).toBe(1);
    expect(service['notes'][0]).toEqual(new Note());
    
    service['change'](0, testNote);
    expect(service['notes'].length).toBe(1);
    expect(service['notes'][0]).toEqual(new Note(...testData));
  });

  it('should get notes as a new instance of the array', () => {
    let note = new Note();
    service['add'](note);

    let notes = service['get']() as Note[];
    expect(notes !== service['notes']).toBe(true);

    for(let i = 0; i < notes.length; i++) {
      expect(notes[i]).toEqual(service['notes'][i]);
      expect(notes[i] !== service['notes'][i]).toBe(true);
    }
  });

  it('should get note given an idx as a new instance of note', () => {
    let note = new Note();
    service['add'](note);

    let noteResult = service['get'](0) as Note;
    expect(noteResult).toEqual(note);
    expect(noteResult !== note).toBe(true);
  });
});
