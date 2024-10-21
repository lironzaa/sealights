import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAddressComponent } from './person-address.component';

describe('PersonAddressComponent', () => {
  let component: PersonAddressComponent;
  let fixture: ComponentFixture<PersonAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
