import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandizersDashboardComponent } from './merchandizers-dashboard.component';

describe('MerchandizersDashboardComponent', () => {
  let component: MerchandizersDashboardComponent;
  let fixture: ComponentFixture<MerchandizersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandizersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandizersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
