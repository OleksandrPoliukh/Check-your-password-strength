import { Component, forwardRef } from '@angular/core';
import { ReactiveFormsModule, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckPassStrengthService } from '../../services/check-pass-strength.service';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true
  }]
})

export class PasswordInputComponent implements ControlValueAccessor {

  password = new FormControl('');

  onChange: (value: string) => void = () => {};
  onTouch: () => void = () => {};

  constructor(private checkPassStrengthService: CheckPassStrengthService) {
    this.password.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value || "");
      }
      this.checkPassStrengthService.checkPassStrength((value || ""));
    });
  }

  writeValue(value: string | null): void {
    this.password.setValue(value || '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
