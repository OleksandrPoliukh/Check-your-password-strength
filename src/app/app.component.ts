import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { HeaderComponent } from './components/header/header.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthIndicatorComponent } from './components/password-strength-indicator/password-strength-indicator.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [
      ReactiveFormsModule,
      HeaderComponent,
      DescriptionComponent,
      PasswordInputComponent,
      PasswordStrengthIndicatorComponent
    ]
})

export class AppComponent {
  title = 'pass-task';

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      password: ['']
    });
  }
}
