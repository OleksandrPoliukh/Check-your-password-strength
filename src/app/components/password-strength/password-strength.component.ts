import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  onPasswordInput() {
    this.checkPassStrength();
  }

  checkPassStrength() {
    if (this.password.length === 0) {
      this.strengthClass = ["gray", "gray", "gray"];
    } else if (this.password.length < 8) {
      this.strengthClass = ["red", "red", "red"];
    } else {
      const hasLetters = /[a-zA-Zа-яА-Я]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      const easyPass = (
        (hasLetters && !hasDigits && !hasSymbols) ||
        (!hasLetters && hasDigits && !hasSymbols) ||
        (!hasLetters && !hasDigits && hasSymbols)
      );

      const mediumPass = (
        (hasLetters && !hasDigits && hasSymbols) ||
        (hasLetters && hasDigits && !hasSymbols) ||
        (!hasLetters && hasDigits && hasSymbols)
      );

      const strongPass = hasLetters && hasDigits && hasSymbols;

      if (easyPass) {
        this.strengthClass = ['red', 'gray', 'gray'];
      } else if (mediumPass) {
        this.strengthClass = ['yellow', 'yellow', 'gray'];
      } else if (strongPass) {
        this.strengthClass = ['green', 'green', 'green'];
      }
    }
  }
}
