import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadTeacherComponent } from './bad-teacher.component';

describe('BadTeacherComponent', () => {
  let component: BadTeacherComponent;
  let fixture: ComponentFixture<BadTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
