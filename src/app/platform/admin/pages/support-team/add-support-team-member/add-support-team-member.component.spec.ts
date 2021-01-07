import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupportTeamMemberComponent } from './add-support-team-member.component';

describe('AddSupportTeamMemberComponent', () => {
  let component: AddSupportTeamMemberComponent;
  let fixture: ComponentFixture<AddSupportTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupportTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupportTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
