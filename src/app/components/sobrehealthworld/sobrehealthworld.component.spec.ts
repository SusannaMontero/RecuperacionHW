import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrehealthworldComponent } from './sobrehealthworld.component';

describe('SobrehealthworldComponent', () => {
  let component: SobrehealthworldComponent;
  let fixture: ComponentFixture<SobrehealthworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrehealthworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrehealthworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
