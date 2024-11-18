import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HlmFormFieldModule, HlmInputDirective, HlmButtonDirective],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  router = inject(Router);

  sigIn() {
    console.log('navigating to main');
    this.router.navigate(['/main']);
  }
}
