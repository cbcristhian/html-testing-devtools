import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid email', () => {
    const email = component.form.controls['email'];
    email.setValue('helloWorld');
    expect(component.form.invalid).toBeTrue();
  });

  it('should return valid email', () => {
    const email = component.form.controls['email'];
    email.setValue('hello@world.com');
    expect(component.form.invalid).toBeFalse();
  });
});
