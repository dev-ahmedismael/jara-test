import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesAndTermsComponent } from './policies-and-terms.component';

describe('PoliciesAndTermsComponent', () => {
  let component: PoliciesAndTermsComponent;
  let fixture: ComponentFixture<PoliciesAndTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesAndTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesAndTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
