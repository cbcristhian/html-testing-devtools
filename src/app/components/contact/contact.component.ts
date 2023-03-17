import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  send() {
    this.form.reset();
    Swal.fire({
      icon: 'success',
      title: 'Registro',
      text: 'Email Registrado!',
    });
  }

  get email() {
    return this.form.get('email');
  }
}
