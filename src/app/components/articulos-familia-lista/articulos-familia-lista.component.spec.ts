import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosFamiliaListaComponent } from './articulos-familia-lista.component';

describe('ArticulosFamiliaListaComponent', () => {
  let component: ArticulosFamiliaListaComponent;
  let fixture: ComponentFixture<ArticulosFamiliaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosFamiliaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosFamiliaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
