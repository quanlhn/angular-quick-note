import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideMenuComponent } from '../../common/component/side-menu/side-menu.component';
import { MainNoteContentComponent } from '../../common/component/main-note-content/main-note-content.component';
import { ListNoteComponent } from '../../common/component/list-note/list-note.component';
import { HeaderComponent } from '../../common/component/header/header.component';
import { ARCHIVED_URL } from '../../common/const/url';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SideMenuComponent,
    MainNoteContentComponent,
    ListNoteComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
