import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarthomeComponent } from './carthome.component';

describe('CarthomeComponent', () => {
  let component: CarthomeComponent;
  let fixture: ComponentFixture<CarthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
