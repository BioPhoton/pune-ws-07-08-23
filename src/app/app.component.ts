import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppShellModule } from './app-shell/app-shell.module';
import {DirtyChecksComponent} from "./shared/dirty-checking/dirty-check.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppShellModule, DirtyChecksComponent],
  template: `
    <dirty-checks></dirty-checks>
    <app-shell><router-outlet></router-outlet></app-shell>
  `
})
export class AppComponent {}
