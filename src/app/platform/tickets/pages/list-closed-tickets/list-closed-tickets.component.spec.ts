import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClosedTicketsComponent } from './list-closed-tickets.component';

describe('ListClosedTicketsComponent', () => {
  let component: ListClosedTicketsComponent;
  let fixture: ComponentFixture<ListClosedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClosedTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClosedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
