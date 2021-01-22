import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEProjectComponent } from './be-project.component';

describe('BEProjectComponent', () => {
  let component: BEProjectComponent;
  let fixture: ComponentFixture<BEProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
