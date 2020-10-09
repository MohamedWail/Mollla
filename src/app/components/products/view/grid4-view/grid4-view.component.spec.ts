import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid4ViewComponent } from './grid4-view.component';

describe('Grid4ViewComponent', () => {
  let component: Grid4ViewComponent;
  let fixture: ComponentFixture<Grid4ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid4ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid4ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
