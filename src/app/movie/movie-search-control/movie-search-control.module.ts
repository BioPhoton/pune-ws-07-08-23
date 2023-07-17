import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieModule } from '../movie.module';
import { MovieSearchControlComponent } from './movie-search-control.component';
import {DirtyChecksComponent} from "../../shared/dirty-checking/dirty-check.component";

@NgModule({
  declarations: [MovieSearchControlComponent],
    imports: [CommonModule, MovieModule, DirtyChecksComponent],
  exports: [MovieSearchControlComponent],
})
export class MovieSearchControlModule {}
