import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprowComponent } from './comprow.component';

describe('ComprowComponent', () => {
  let component: ComprowComponent;
  let fixture: ComponentFixture<ComprowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
