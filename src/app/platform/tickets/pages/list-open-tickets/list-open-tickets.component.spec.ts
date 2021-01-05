import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpenTicketsComponent } from './list-open-tickets.component';

describe('ListOpenTicketsComponent', () => {
  let component: ListOpenTicketsComponent;
  let fixture: ComponentFixture<ListOpenTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOpenTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOpenTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
