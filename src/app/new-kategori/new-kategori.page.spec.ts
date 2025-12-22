import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewKategoriPage } from './new-kategori.page';

describe('NewKategoriPage', () => {
  let component: NewKategoriPage;
  let fixture: ComponentFixture<NewKategoriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewKategoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
