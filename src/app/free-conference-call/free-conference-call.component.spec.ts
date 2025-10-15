import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeConferenceCallComponent } from './free-conference-call.component';

describe('FreeConferenceCallComponent', () => {
  let component: FreeConferenceCallComponent;
  let fixture: ComponentFixture<FreeConferenceCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeConferenceCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeConferenceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
