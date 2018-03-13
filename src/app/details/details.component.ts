import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable'

import { Note } from '../models/note.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  note: Note;
  isEdit: boolean = false;
  editContent: string;
  editTitle: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  retrieveDetails() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.note = this.apiService.get(this.id) as Note;
    });
  }

  ngOnInit() {
    this.retrieveDetails();
  }

  onEdit() {
    this.editContent = this.note.content;
    this.editTitle = this.note.title;
    this.isEdit = true;
  }

  onSave() {
    this.note.content = this.editContent;
    this.note.title = this.editTitle;
    this.isEdit = false;
    this.apiService.change(this.id, this.note);
  }

  onCancel() {
    this.editContent = this.note.content;
    this.editTitle = this.note.title;
    this.isEdit = false;
  }
}
