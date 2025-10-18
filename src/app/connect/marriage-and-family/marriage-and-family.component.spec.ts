import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageAndFamilyComponent } from './marriage-and-family.component';

describe('MarriageAndFamilyComponent', () => {
  let component: MarriageAndFamilyComponent;
  let fixture: ComponentFixture<MarriageAndFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageAndFamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriageAndFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
