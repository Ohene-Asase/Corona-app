import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaStatsComponent } from './corona-stats.component';

describe('CoronaStatsComponent', () => {
  let component: CoronaStatsComponent;
  let fixture: ComponentFixture<CoronaStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
