import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEditComponent } from './tela-edit.component';

describe('TelaEditComponent', () => {
  let component: TelaEditComponent;
  let fixture: ComponentFixture<TelaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
