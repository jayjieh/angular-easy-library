import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooEasyComponent } from './too-easy.component';

describe('TooEasyComponent', () => {
  let component: TooEasyComponent;
  let fixture: ComponentFixture<TooEasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooEasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
