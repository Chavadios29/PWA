import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false //sino no jala
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: [
          '',
          [Validators.required, Validators.email]
        ],
        fullName: [
          '',
          [Validators.required]
        ],
        user: [
          '',
          [Validators.required, this.noSpaces]
        ],
        password: [
          '',
          [Validators.required, Validators.minLength(6)]
        ],
        confirmPassword: [
          '',
          [Validators.required, Validators.minLength(6)]
        ],
      },
      { validator: this.passwordMatchValidator }
    );

    // Al cambiar el valor de fullName, se convierte a mayúsculas
    this.registerForm.get('fullName')?.valueChanges.subscribe((value) => {
      const upperCaseValue = value.toUpperCase();
      this.registerForm.get('fullName')?.setValue(upperCaseValue, { emitEvent: false });
    });
  }

  // Evita espacios en blanco
  noSpaces(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.includes(' ')) {
      return { noSpaces: true };
    }
    return null;
  }

  // Verifica que las contraseñas sean iguales
  passwordMatchValidator(group: FormGroup): ValidationErrors | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null
      : { mismatch: true };
  }

  // Enviar formulario si es válido
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido', this.registerForm.value);
    }
  }

  // Acceso a los controles del formulario
  get formControls() {
    return this.registerForm.controls;
  }
}
