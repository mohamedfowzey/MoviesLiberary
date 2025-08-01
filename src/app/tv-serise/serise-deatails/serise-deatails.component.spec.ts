import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriseDeatailsComponent } from './serise-deatails.component';

describe('SeriseDeatailsComponent', () => {
  let component: SeriseDeatailsComponent;
  let fixture: ComponentFixture<SeriseDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriseDeatailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriseDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
