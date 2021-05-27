import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthealthworldComponent } from './abouthealthworld.component';

describe('AbouthealthworldComponent', () => {
  let component: AbouthealthworldComponent;
  let fixture: ComponentFixture<AbouthealthworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouthealthworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthealthworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
