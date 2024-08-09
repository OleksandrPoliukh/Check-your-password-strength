import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CheckPassStrengthService } from '../../services/check-pass-strength.service';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})

export class PasswordInputComponent {

  password = new FormControl('');

  constructor(private checkPassStrengthService: CheckPassStrengthService) {
    this.password.valueChanges.subscribe(value => {
      this.checkPassStrengthService.checkPassStrength(value || "");
    });
  }
}
