import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTablePlaceholderComponent } from './object-table-placeholder.component';

describe('ObjectTablePlaceholderComponent', () => {
  let component: ObjectTablePlaceholderComponent;
  let fixture: ComponentFixture<ObjectTablePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectTablePlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectTablePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
