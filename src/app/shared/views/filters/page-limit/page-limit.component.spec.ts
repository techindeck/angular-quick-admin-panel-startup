import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLimitComponent } from './page-limit.component';

describe('PageLimitComponent', () => {
  let component: PageLimitComponent;
  let fixture: ComponentFixture<PageLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
