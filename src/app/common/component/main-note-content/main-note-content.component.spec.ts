import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNoteContentComponent } from './main-note-content.component';

describe('MainNoteContentComponent', () => {
  let component: MainNoteContentComponent;
  let fixture: ComponentFixture<MainNoteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNoteContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNoteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
