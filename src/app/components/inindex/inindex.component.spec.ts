import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InindexComponent } from './inindex.component';

describe('InindexComponent', () => {
  let component: InindexComponent;
  let fixture: ComponentFixture<InindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
