import { Injectable } from '@angular/core';
import { BoardCellService } from './board-cell/board-cell.service';
import BoardCell from './board-cell/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellsService {

  constructor(
    private board_cell_service: BoardCellService
  ) { }

  public generate_records( rows: number, columns: number ): BoardCell[] {
    return Array(rows * columns).fill( null )
      .map( (_, index) => { 
        return this.board_cell_service.create( rows, index );
      } );
  }


}
