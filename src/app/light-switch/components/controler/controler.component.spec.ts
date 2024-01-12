import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlerComponent } from './controler.component';

describe('ControlerComponent', () => {
  let component: ControlerComponent;
  let fixture: ComponentFixture<ControlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlerComponent]
    });
    fixture = TestBed.createComponent(ControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
