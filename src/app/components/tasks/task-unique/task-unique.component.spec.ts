import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUniqueComponent } from './task-unique.component';

describe('TaskUniqueComponent', () => {
  let component: TaskUniqueComponent;
  let fixture: ComponentFixture<TaskUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
