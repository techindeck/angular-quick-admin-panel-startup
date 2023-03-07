import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCardPlaceholderComponent } from './object-card-placeholder.component';

describe('ObjectCardPlaceholderComponent', () => {
  let component: ObjectCardPlaceholderComponent;
  let fixture: ComponentFixture<ObjectCardPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectCardPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
