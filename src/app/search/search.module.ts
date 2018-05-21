import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';

@NgModule({
  imports: [
    CommonModule,SearchRouting,FormsModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
