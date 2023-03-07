import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCardDetailPlaceholderComponent } from './object-card-detail-placeholder.component';

describe('ObjectCardDetailPlaceholderComponent', () => {
  let component: ObjectCardDetailPlaceholderComponent;
  let fixture: ComponentFixture<ObjectCardDetailPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectCardDetailPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectCardDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
