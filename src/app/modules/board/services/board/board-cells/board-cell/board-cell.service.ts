import { Injectable } from '@angular/core';
import BoardCell from 'src/app/modules/board/services/board/board-cells/board-cell/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellService {

  public create( columns: number, rows: number, id: number ): BoardCell {
    const column = (( Math.floor( id / columns ) % 2 === 0) ? id % columns : id % columns + columns) + 1;
    const row = Math.floor( id / (columns * 2) ) + 1;
    
    const neighbours: number[] = [];

    const top_position = id - 2 * columns;
    if( this.is_existing_cell( top_position, rows, columns) )
      neighbours.push( top_position );

    const top_right_position = id + (column % 2 ? -rows * 2 + 3: 1);
    if( this.is_existing_cell( top_right_position, rows, columns) ) // also need to check not to add to last column
      neighbours.push( top_right_position );

    // bottom-right position
    // const position_3 = id + 2 * columns + 1;
    // if( !this.is_in_last_row( row, rows ) )
    //   neighbours.push( position_3 );
    
    const bottom_position = id + 2 * columns;
    if( this.is_existing_cell( bottom_position, rows, columns) )
      neighbours.push( bottom_position );
    
    // const position_5 = id + column - 1;
    // if( position_5 < column*row && position_5 > 0 )
    //   neighbours.push( position_5 );

    const top_left_position = id + (column % 2 ? -rows * 2 + 1: -1);
    if( this.is_existing_cell( top_left_position, rows, columns) ) // also need to check not to add to first column
      neighbours.push( top_left_position );

    return { column, row, id, neighbours };
  }

  private is_existing_cell( index: number, rows: number, columns: number ): boolean {
    return index >= 0 && index < columns * rows;
  }

}
