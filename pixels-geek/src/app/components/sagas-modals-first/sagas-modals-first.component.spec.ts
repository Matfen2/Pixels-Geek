import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasModalsFirstComponent } from './sagas-modals-first.component';

describe('SagasModalsFirstComponent', () => {
  let component: SagasModalsFirstComponent;
  let fixture: ComponentFixture<SagasModalsFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasModalsFirstComponent]
    });
    fixture = TestBed.createComponent(SagasModalsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
