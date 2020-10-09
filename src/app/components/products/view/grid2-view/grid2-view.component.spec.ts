import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid2ViewComponent } from './grid2-view.component';

describe('Grid2ViewComponent', () => {
  let component: Grid2ViewComponent;
  let fixture: ComponentFixture<Grid2ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid2ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
