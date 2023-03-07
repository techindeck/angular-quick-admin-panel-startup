import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResultCountComponent } from './page-result-count.component';

describe('PageResultCountComponent', () => {
  let component: PageResultCountComponent;
  let fixture: ComponentFixture<PageResultCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageResultCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageResultCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
