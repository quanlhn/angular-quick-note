import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NoteInListComponent } from '../note-in-list/note-in-list.component';


@Component({
  selector: 'app-list-note',
  standalone: true,
  imports: [MatIconModule, NoteInListComponent],
  templateUrl: './list-note.component.html',
  styleUrl: './list-note.component.css'
})
export class ListNoteComponent {

}


