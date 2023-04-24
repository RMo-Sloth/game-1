import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from 'src/app/modules/board/components/board/board.component';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
