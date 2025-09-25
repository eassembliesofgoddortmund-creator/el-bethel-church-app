import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayWorshipServiceComponent } from './sunday-worship-service.component';

describe('SundayWorshipServiceComponent', () => {
  let component: SundayWorshipServiceComponent;
  let fixture: ComponentFixture<SundayWorshipServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SundayWorshipServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundayWorshipServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
