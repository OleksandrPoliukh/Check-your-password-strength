import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckPassStrengthService {

  strengthClass = ["gray", "gray", "gray"];

  private strengthClassSubject = new BehaviorSubject<string[]>(this.strengthClass);
  strengthClass$ = this.strengthClassSubject.asObservable();

  constructor() { }

  checkPassStrength(password: string): string[] {


    if (password.length === 0) {
      this.strengthClass = ["gray", "gray", "gray"];
    } else if (password.length < 8) {
      this.strengthClass = ["red", "red", "red"];
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
        this.strengthClass = ['red', 'gray', 'gray'];
      } else if (mediumPass) {
        this.strengthClass = ['yellow', 'yellow', 'gray'];
      } else if (strongPass) {
        this.strengthClass = ['green', 'green', 'green'];
      }
    }

    this.strengthClassSubject.next(this.strengthClass);
    return this.strengthClass

  }


}
