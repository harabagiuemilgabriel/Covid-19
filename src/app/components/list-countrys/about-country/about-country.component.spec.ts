import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCountryComponent } from './about-country.component';

describe('AboutCountryComponent', () => {
  let component: AboutCountryComponent;
  let fixture: ComponentFixture<AboutCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
