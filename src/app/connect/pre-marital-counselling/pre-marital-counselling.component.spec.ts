import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMaritalCounsellingComponent } from './pre-marital-counselling.component';

describe('PreMaritalCounsellingComponent', () => {
  let component: PreMaritalCounsellingComponent;
  let fixture: ComponentFixture<PreMaritalCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreMaritalCounsellingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreMaritalCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
