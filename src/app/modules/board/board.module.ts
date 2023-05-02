import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from 'src/app/modules/board/components/board/board.component';
import { BoardCellComponent } from './components/board-cell/board-cell.component';



@NgModule({
  declarations: [
    BoardComponent,
    BoardCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
