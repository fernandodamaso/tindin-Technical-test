import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPhotosComponent } from './modal-photos.component';

describe('ModalPhotosComponent', () => {
  let component: ModalPhotosComponent;
  let fixture: ComponentFixture<ModalPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
