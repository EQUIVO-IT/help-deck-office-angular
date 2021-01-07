import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSupportTeamMembersComponent } from './list-support-team-members.component';

describe('ListSupportTeamMembersComponent', () => {
  let component: ListSupportTeamMembersComponent;
  let fixture: ComponentFixture<ListSupportTeamMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSupportTeamMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSupportTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
