import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucklingFormComponent } from './duckling-form.component';

describe('DucklingFormComponent', () => {
  let component: DucklingFormComponent;
  let fixture: ComponentFixture<DucklingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DucklingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucklingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
