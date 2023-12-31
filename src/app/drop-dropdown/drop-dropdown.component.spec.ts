import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdownComponent } from './drop-dropdown.component';

describe('ProfileDropdownComponent', () => {
  let component: ProfileDropdownComponent;
  let fixture: ComponentFixture<ProfileDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDropdownComponent]
    });
    fixture = TestBed.createComponent(ProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
