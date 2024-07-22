import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTeacherComponent } from './good-teacher.component';

describe('GoodTeacherComponent', () => {
  let component: GoodTeacherComponent;
  let fixture: ComponentFixture<GoodTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
