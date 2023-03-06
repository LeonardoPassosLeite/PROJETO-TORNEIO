import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissoInsertComponent } from './compromisso-insert.component';

describe('CompromissoInsertComponent', () => {
  let component: CompromissoInsertComponent;
  let fixture: ComponentFixture<CompromissoInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromissoInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromissoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
