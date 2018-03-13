import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { NotesComponent } from './notes/notes.component';
import { DetailsComponent } from './details/details.component';
import { NoteComponent } from './note/note.component';
import { AddComponent } from './add/add.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NotesComponent,
        DetailsComponent,
        NoteComponent,
        AddComponent
      ],
      imports: [
        RoutingModule,
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },

      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
