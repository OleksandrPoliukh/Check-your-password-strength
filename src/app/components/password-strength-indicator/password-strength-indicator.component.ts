import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { CheckPassStrengthService } from '../../services/check-pass-strength.service';

@Component({
  selector: 'app-password-strength-indicator',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.css']
})
export class PasswordStrengthIndicatorComponent {

  strengthClass: string[] = ["gray", "gray", "gray"];

  constructor(private checkPassStrengthService: CheckPassStrengthService) {
    this.checkPassStrengthService.strengthClass$.subscribe(strengthClass => {
      this.strengthClass = strengthClass;
    })
  }

}
