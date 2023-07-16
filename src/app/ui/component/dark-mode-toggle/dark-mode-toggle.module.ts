import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxLet } from '@rx-angular/template/let';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';

@NgModule({
  declarations: [DarkModeToggleComponent],
  exports: [DarkModeToggleComponent],
  imports: [CommonModule, RxLet],
})
export class DarkModeToggleModule {}
