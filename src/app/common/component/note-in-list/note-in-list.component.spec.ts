import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteInListComponent } from './note-in-list.component';

describe('NoteInListComponent', () => {
  let component: NoteInListComponent;
  let fixture: ComponentFixture<NoteInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteInListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
