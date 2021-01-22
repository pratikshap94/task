import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTECHProjectComponent } from './mtech-project.component';

describe('MTECHProjectComponent', () => {
  let component: MTECHProjectComponent;
  let fixture: ComponentFixture<MTECHProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTECHProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTECHProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
