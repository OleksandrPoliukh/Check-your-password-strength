import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CheckPassStrengthService } from '../../services/check-pass-strength.service';

@Component({
  selector: 'app-password-strength-indicator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.css']
})
export class PasswordStrengthIndicatorComponent {
  @Input() password: string = '';
  strengthClass: string[] = ["gray", "gray", "gray"];

  constructor(private checkPassStrengthService: CheckPassStrengthService) {}

  ngOnChanges() {
    this.strengthClass = this.checkPassStrengthService.checkPassStrength(this.password);
  }
}
