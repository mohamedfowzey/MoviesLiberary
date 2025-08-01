import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvUpcommingComponent } from './tv-upcomming.component';

describe('TvUpcommingComponent', () => {
  let component: TvUpcommingComponent;
  let fixture: ComponentFixture<TvUpcommingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvUpcommingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvUpcommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
