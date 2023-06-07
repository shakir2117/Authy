import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesseditComponent } from './accessedit.component';

describe('AccesseditComponent', () => {
  let component: AccesseditComponent;
  let fixture: ComponentFixture<AccesseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
