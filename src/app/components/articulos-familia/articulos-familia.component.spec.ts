import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosFamiliaComponent } from './articulos-familia.component';

describe('ArticulosFamiliaComponent', () => {
  let component: ArticulosFamiliaComponent;
  let fixture: ComponentFixture<ArticulosFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
