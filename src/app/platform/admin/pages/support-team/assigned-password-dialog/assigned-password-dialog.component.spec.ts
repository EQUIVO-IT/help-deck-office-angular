import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPasswordDialogComponent } from './assigned-password-dialog.component';

describe('AssignedPasswordDialogComponent', () => {
  let component: AssignedPasswordDialogComponent;
  let fixture: ComponentFixture<AssignedPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedPasswordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
