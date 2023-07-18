import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasModalsSecondComponent } from './sagas-modals-second.component';

describe('SagasModalsSecondComponent', () => {
  let component: SagasModalsSecondComponent;
  let fixture: ComponentFixture<SagasModalsSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasModalsSecondComponent]
    });
    fixture = TestBed.createComponent(SagasModalsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
