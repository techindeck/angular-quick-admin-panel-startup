import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewTypeComponent } from './page-view-type.component';

describe('PageViewTypeComponent', () => {
  let component: PageViewTypeComponent;
  let fixture: ComponentFixture<PageViewTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageViewTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
