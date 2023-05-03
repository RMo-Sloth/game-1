import { Injectable } from '@angular/core';
import Board from './Board';
import { BoardCellsService } from './board-cells/board-cells.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private board_cells_service: BoardCellsService
  ) { }

  public init(): Board {
    const default_board = {
      rows: 5,
      columns: 2,
      cells: []
    };
    return this.generate_cells( default_board );
    // different generation types, how do I get challenging and different maps?
    // can preset the ratios of terrain maybe?
    // How does the same terrain stick together??? Chart theory???
  }

  private generate_cells( board: Board ): Board {
      return {
        ...board,
        cells: this.board_cells_service.generate_records( board.rows, board.columns )
      }
  }

}
