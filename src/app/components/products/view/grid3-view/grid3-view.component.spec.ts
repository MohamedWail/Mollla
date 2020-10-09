import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3ViewComponent } from './grid3-view.component';

describe('Grid3ViewComponent', () => {
  let component: Grid3ViewComponent;
  let fixture: ComponentFixture<Grid3ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid3ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid3ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
