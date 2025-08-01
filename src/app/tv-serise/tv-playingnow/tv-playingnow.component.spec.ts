import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPlayingnowComponent } from './tv-playingnow.component';

describe('TvPlayingnowComponent', () => {
  let component: TvPlayingnowComponent;
  let fixture: ComponentFixture<TvPlayingnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvPlayingnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvPlayingnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
