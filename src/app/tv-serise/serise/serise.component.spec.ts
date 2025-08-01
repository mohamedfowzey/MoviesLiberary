import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriseComponent } from './serise.component';

describe('SeriseComponent', () => {
  let component: SeriseComponent;
  let fixture: ComponentFixture<SeriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
