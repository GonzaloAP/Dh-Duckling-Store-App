import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucklingContainerComponent } from './duckling-container.component';

describe('DucklingContainerComponent', () => {
  let component: DucklingContainerComponent;
  let fixture: ComponentFixture<DucklingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DucklingContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucklingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
