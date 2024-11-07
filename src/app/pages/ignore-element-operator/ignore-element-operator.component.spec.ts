import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreElementOperatorComponent } from './ignore-element-operator.component';

describe('IgnoreElementOperatorComponent', () => {
  let component: IgnoreElementOperatorComponent;
  let fixture: ComponentFixture<IgnoreElementOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IgnoreElementOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgnoreElementOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
