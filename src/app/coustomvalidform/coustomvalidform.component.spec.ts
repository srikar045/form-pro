import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomvalidformComponent } from './coustomvalidform.component';

describe('CoustomvalidformComponent', () => {
  let component: CoustomvalidformComponent;
  let fixture: ComponentFixture<CoustomvalidformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomvalidformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoustomvalidformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
