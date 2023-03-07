import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSortComponent } from './page-sort.component';

describe('PageSortComponent', () => {
  let component: PageSortComponent;
  let fixture: ComponentFixture<PageSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
