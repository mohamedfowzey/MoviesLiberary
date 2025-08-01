import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriseComponent } from './tv-serise.component';

describe('TvSeriseComponent', () => {
  let component: TvSeriseComponent;
  let fixture: ComponentFixture<TvSeriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvSeriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvSeriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
