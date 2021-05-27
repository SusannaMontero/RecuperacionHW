import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsloginComponent } from './eslogin.component';

describe('EsloginComponent', () => {
  let component: EsloginComponent;
  let fixture: ComponentFixture<EsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
