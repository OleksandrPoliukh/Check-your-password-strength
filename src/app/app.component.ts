import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [HeaderComponent, PasswordStrengthComponent, DescriptionComponent]
})
export class AppComponent {
  title = 'pass-task';
}
