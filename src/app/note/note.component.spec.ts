import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { Note } from '../models/note.model';
import { By } from '@angular/platform-browser';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.note = new Note();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    let titleEl = fixture.debugElement.query(By.css(".note-title"));
    expect(titleEl.nativeElement).toBeDefined();
    expect(titleEl.nativeElement.textContent).toContain('Untitled');
  });

  it('should display remove button', () => {
    let removeBtn = fixture.debugElement.query(By.css(".remove-btn"));
    expect(removeBtn.nativeElement).toBeDefined();
  });

  it('should emit view note event when clicked', (done) => {
    component.viewEvent.subscribe(v => {
      done();
    });
    fixture.debugElement.query(By.css(".view-btn")).triggerEventHandler('click', null);
  });

  it('should emit remove note event when the remove button is clicked', (done) => {
    component.removeEvent.subscribe(v => {
      done();
    });
    fixture.debugElement.query(By.css(".remove-btn")).triggerEventHandler('click', null);
  });
});
