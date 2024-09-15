import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadergallerComponent } from './headergaller.component';

describe('HeadergallerComponent', () => {
  let component: HeadergallerComponent;
  let fixture: ComponentFixture<HeadergallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadergallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadergallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
