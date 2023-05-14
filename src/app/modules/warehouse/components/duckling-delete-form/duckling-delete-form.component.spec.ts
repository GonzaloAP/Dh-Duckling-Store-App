import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucklingDeleteFormComponent } from './duckling-delete-form.component';

describe('DucklingDeleteFormComponent', () => {
  let component: DucklingDeleteFormComponent;
  let fixture: ComponentFixture<DucklingDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DucklingDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucklingDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
