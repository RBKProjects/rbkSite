import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLogInComponent } from './facebook-log-in.component';

describe('FacebookLogInComponent', () => {
  let component: FacebookLogInComponent;
  let fixture: ComponentFixture<FacebookLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
