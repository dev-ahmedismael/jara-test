import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndCondetionsComponent } from './terms-and-condetions.component';

describe('TermsAndCondetionsComponent', () => {
  let component: TermsAndCondetionsComponent;
  let fixture: ComponentFixture<TermsAndCondetionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsAndCondetionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndCondetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
