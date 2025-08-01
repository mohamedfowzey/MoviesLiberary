import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingnowComponent } from './playingnow.component';

describe('PlayingnowComponent', () => {
  let component: PlayingnowComponent;
  let fixture: ComponentFixture<PlayingnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayingnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
