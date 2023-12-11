import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkayrComponent } from './okayr.component';

describe('OkayrComponent', () => {
  let component: OkayrComponent;
  let fixture: ComponentFixture<OkayrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkayrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkayrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
