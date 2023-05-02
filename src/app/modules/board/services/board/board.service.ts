import { Injectable } from '@angular/core';
import Board from '../../data/Board';
import BoardCell from '../../data/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  public init(): Board {
    const default_board = {
      rows: 10,
      columns: 8,
      cells: []
    };
    return this.generate_cells( default_board );
    // different generation types, how do I get challenging and different maps?
    // can preset the ratios of terrain maybe?
    // How does the same terrain stick together??? Chart theory???
  }

  private generate_cells( board: Board ): Board {
    const cells: BoardCell[] = Array(board.rows * board.columns)
      .fill(null)
      .map( (_, index) => ({
        // TODO: extract to BoardSellsService
        column: index % board.columns,
        row: Math.floor( index / board.columns ) + 1,
        id: index
      }) );

      return {
        ...board,
        cells
      }
  }

}
