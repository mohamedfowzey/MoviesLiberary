import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopatedComponent } from './topated.component';

describe('TopatedComponent', () => {
  let component: TopatedComponent;
  let fixture: ComponentFixture<TopatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
