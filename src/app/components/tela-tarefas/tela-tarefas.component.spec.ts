import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTarefasComponent } from './tela-tarefas.component';

describe('TelaTarefasComponent', () => {
  let component: TelaTarefasComponent;
  let fixture: ComponentFixture<TelaTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
