import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNewTicketComponent } from './open-new-ticket.component';

describe('OpenNewTicketComponent', () => {
  let component: OpenNewTicketComponent;
  let fixture: ComponentFixture<OpenNewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenNewTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
