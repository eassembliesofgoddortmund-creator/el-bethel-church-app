import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageRestorationComponent } from './marriage-restoration.component';

describe('MarriageRestorationComponent', () => {
  let component: MarriageRestorationComponent;
  let fixture: ComponentFixture<MarriageRestorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageRestorationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriageRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
