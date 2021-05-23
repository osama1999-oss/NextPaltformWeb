import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestirationComponent } from './regestiration.component';

describe('RegestirationComponent', () => {
  let component: RegestirationComponent;
  let fixture: ComponentFixture<RegestirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestirationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
