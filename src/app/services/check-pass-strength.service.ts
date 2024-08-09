import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckPassStrengthService {

  constructor() { }

  checkPassStrength(password: string): string[] {

    let strengthClass = ["gray", "gray", "gray"];

    if (password.length === 0) {
      return ["gray", "gray", "gray"];
    } else if (password.length < 8) {
      return ["red", "red", "red"];
    } else {
      const hasLetters = /[a-zA-Zа-яА-Я]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

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
        strengthClass = ['red', 'gray', 'gray'];
      } else if (mediumPass) {
        strengthClass = ['yellow', 'yellow', 'gray'];
      } else if (strongPass) {
        strengthClass = ['green', 'green', 'green'];
      }
    }


    return strengthClass;
  }
}
