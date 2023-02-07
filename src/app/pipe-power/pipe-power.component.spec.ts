import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePowerComponent } from './pipe-power.component';

describe('PipePowerComponent', () => {
  let component: PipePowerComponent;
  let fixture: ComponentFixture<PipePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
