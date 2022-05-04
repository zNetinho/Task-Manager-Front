import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCriarComponent } from './tela-criar.component';

describe('TelaCriarComponent', () => {
  let component: TelaCriarComponent;
  let fixture: ComponentFixture<TelaCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
