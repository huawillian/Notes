import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { ApiService } from '../services/api.service';
import { Note } from '../models/note.model';
import { By } from '@angular/platform-browser';
import { NoteComponent } from '../note/note.component';
import { AddComponent } from '../add/add.component';
import { Router } from '@angular/router';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NotesComponent,
        NoteComponent,
        AddComponent
      ],
      providers: [
        ApiService,
        { provide: Router, useValue: { navigate: ()=>{} }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ApiService);
    service.add(new Note());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject the api service', () => {
    expect(service).toBeDefined();
  });

  it('should have a notes property', () => {
    expect(component.notes).toBeDefined();
    expect(component.notes).toEqual(jasmine.any(Array));
  });

  it('should display a list of notes', () => {
    component.notes = [new Note(), new Note(), new Note()];
    fixture.detectChanges();
    let noteElList = fixture.debugElement.queryAll(By.css(".note"));
    expect(noteElList.length).toBe(3);
    noteElList.forEach((v, i) => {
      expect(v.nativeElement.textContent).toContain(component.notes[i].title);
    });
  });

  it('should display the add component', () => {
    fixture.detectChanges();
    let newEl = fixture.debugElement.query(By.css(".new"));
    expect(newEl.nativeElement).toBeDefined();
  });

  it('should call view method when the view component is clicked', () => {
    spyOn(component, 'view');
    fixture.detectChanges();
    fixture.debugElement.query(By.css(".note")).triggerEventHandler('view', null);
    expect(component.view).toHaveBeenCalled();
  });

  it('should call remove method with idx when a remove event is emitted from a note component', () => {
    fixture.detectChanges();
    fixture.debugElement.query(By.css(".note")).triggerEventHandler('remove', null);
    fixture.detectChanges();
    expect(component.notes.length).toBe(0);
    expect(fixture.debugElement.queryAll(By.css(".note")).length).toBe(0);
  });

  it('should call addNew method when new note button is pressed', () => {
    spyOn(component, 'addNew');
    fixture.detectChanges();
    fixture.debugElement.query(By.css(".new")).triggerEventHandler('click', null);
    expect(component.addNew).toHaveBeenCalled();
  });
});
