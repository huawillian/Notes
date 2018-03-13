import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DetailsComponent } from './details.component';
import { By } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note.model';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    spyOn(DetailsComponent.prototype, 'retrieveDetails').and.returnValue(null);

    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: null}, 
        ApiService,
        Router
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.note = new Note();
    component.id = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain isEdit boolean property defaulted to false', () => {
    expect(component['isEdit']).toBe(false);
  });

  it('should display save-btn if isEdit is true', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.save-btn'))).toBeNull();
    component['isEdit'] = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.save-btn'))).not.toBeNull();
  });
  
  it('should display cancel-btn if isEdit is true', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.cancel-btn'))).toBeNull();
    component['isEdit'] = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.cancel-btn'))).not.toBeNull();
  });

  it('should display edit-content if isEdit is true', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.edit-content'))).toBeNull();
    component['isEdit'] = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.edit-content'))).not.toBeNull();
  });

  it('should display edit-btn if isEdit is false', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.edit-btn'))).not.toBeNull();
    component['isEdit'] = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(".edit-btn"))).toBeNull();
  });

  it('should display content-view if isEdit is false', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.content-view'))).not.toBeNull();
    component['isEdit'] = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(".content-view"))).toBeNull();
  });

  it('should copy content into editTextView when editBtn is pressed', () => {
    expect(component.editContent).toBeUndefined();
    let editBtn = fixture.debugElement.query(By.css('.edit-btn'));
    editBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.editContent).toBe((new Note()).content);
  });

  it('should save editTextView text into content when saveBtn is pressed', () => {
    let testData = "Hello World!";

    let editBtn = fixture.debugElement.query(By.css('.edit-btn'));
    editBtn.triggerEventHandler('click', null);

    fixture.detectChanges();

    let editContent = fixture.debugElement.query(By.css('.edit-content'));
    let saveBtn = fixture.debugElement.query(By.css('.save-btn'));
    component.editContent = testData;
    saveBtn.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.note.content).toBe(testData);
  });

  it('should not save editTextView text into content when cancelBtn is pressed', () => {
    let testData = "Hello World!";
    
    let editBtn = fixture.debugElement.query(By.css('.edit-btn'));
    editBtn.triggerEventHandler('click', null);

    fixture.detectChanges();

    let editContent = fixture.debugElement.query(By.css('.edit-content'));
    let cancelBtn = fixture.debugElement.query(By.css('.cancel-btn'));
    component.editContent = testData;

    cancelBtn.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.note.content).toBe((new Note).content);
  });
});
