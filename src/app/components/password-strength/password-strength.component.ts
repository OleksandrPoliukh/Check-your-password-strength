import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckPassStrengthService } from '../../services/check-pass-strength.service';

@Component({
    selector: 'app-password-strength',
    templateUrl: './password-strength.component.html',
    styleUrl: './password-strength.component.css',
    standalone: true,
    imports: [FormsModule, NgClass]
})
export class PasswordStrengthComponent {
  password: string = "";
  strengthClass: string[] = ["gray", "gray", "gray"];

  constructor(private checkPassStrengthService: CheckPassStrengthService) {}


  onPasswordInput() {
    this.strengthClass = this.checkPassStrengthService.checkPassStrength(this.password);
  }
}
