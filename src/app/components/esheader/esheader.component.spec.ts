import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsheaderComponent } from './esheader.component';

describe('EsheaderComponent', () => {
  let component: EsheaderComponent;
  let fixture: ComponentFixture<EsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
