import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmMenuBarModule, HlmMenuModule } from '@spartan-ng/ui-menu-helm';
import { HlmIconModule } from '../../../components/ui-icon-helm/src/index';
import { provideIcons } from '@ng-icons/core';

import {
  lucideUserCircle2,
  lucideUserCircle,
  lucideLayers,
  lucideMessageSquare,
  lucideCode,
  lucideMail,
  lucideLogOut,
  lucideSmile,
  lucideCog,
  lucideGithub,
  lucideKeyboard,
  lucideUser,
  lucidePlus,
  lucidePlusCircle,
  lucideHelpCircle,
} from '@ng-icons/lucide';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmMenuModule,
    HlmMenuBarModule,
    HlmIconModule,
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmSubMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,
    HlmButtonDirective,
    HlmIconComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [
    provideIcons({
      lucideUser,
      lucideLayers,
      lucideCog,
      lucideKeyboard,
      lucideUserCircle,
      lucidePlus,
      lucideGithub,
      lucideHelpCircle,
      lucideCode,
      lucideLogOut,
      lucideMail,
      lucideMessageSquare,
      lucidePlusCircle,
      lucideUserCircle2
    }),
  ],
})
export class MainComponent {}
