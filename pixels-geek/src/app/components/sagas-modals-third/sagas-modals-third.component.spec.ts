import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasModalsThirdComponent } from './sagas-modals-third.component';

describe('SagasModalsThirdComponent', () => {
  let component: SagasModalsThirdComponent;
  let fixture: ComponentFixture<SagasModalsThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasModalsThirdComponent]
    });
    fixture = TestBed.createComponent(SagasModalsThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
