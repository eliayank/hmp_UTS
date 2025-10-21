import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewBeritaPage } from './new-berita.page';

describe('NewBeritaPage', () => {
  let component: NewBeritaPage;
  let fixture: ComponentFixture<NewBeritaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
