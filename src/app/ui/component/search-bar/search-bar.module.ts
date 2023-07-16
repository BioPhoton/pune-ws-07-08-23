import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxLet } from '@rx-angular/template/let';
import { SearchBarComponent } from './search-bar.component';
import {FastSvgModule} from '@push-based/ngx-fast-svg';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, RxLet, FastSvgModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
