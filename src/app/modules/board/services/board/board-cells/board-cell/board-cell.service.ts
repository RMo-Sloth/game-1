import { Injectable } from '@angular/core';
import BoardCell from 'src/app/modules/board/services/board/board-cells/board-cell/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellService {

  public create( rows: number, columns: number, id: number ): BoardCell {
    // NOTICE: I am merging 2 columns in 1 row to accommodate the hex grid in a somewhat comprehensible way
    // EXTRA NOTE: Maybe it's even better to use 3 axis ( top-to-bottom, top-left to bottom-right and top-right to bottom-left ) instead of 2 ( column and row )
    // That would make the neighbour calculations much easier, but slightly weird to define a grid-size
    const row = Math.floor( id / (columns * 2) ) + 1;
    const coordinates = [];


    coordinates[0] = Math.floor( id / rows ) + 1;
    coordinates[1] = id % rows + 1 - Math.floor( coordinates[0] / 2 );


    // const neighbours: number[] = this.compute_neighbours(id, columns, rows, coordinates[0]);

    return { row, id, neighbours: [], coordinates };
  }

  // private compute_neighbours(id: number, columns: number, rows: number, column: number): number[] {
  //   const top_position = id - 2 * columns;
  //   const bottom_position = id + 2 * columns;
  //   let result = [ top_position, bottom_position ];

  //   if( column % 2 === 0 ) {
  //     const bottom_left_position = id + 2 * columns - 1;
  //     const top_left_position = id - 1;
  //     result = [ ...result, bottom_left_position, top_left_position ];
  //   } 
  //   else if( column !== 1 ) {
  //     const bottom_left_position = id - 1;
  //     const top_left_position = id + 1 - 2 * rows;
  //     result = [ ...result, bottom_left_position, top_left_position ];
  //   }
    
  //   if( column % 2 === 1 ) {
  //     const top_right_position = id + 3 - 2 * rows;
  //     const bottom_right_position = id + 1;
  //     result = [ ...result, top_right_position, bottom_right_position ];
  //   } 
  //   else if( !this.is_right_column(column, columns) ) {
  //     const top_right_position = id + 1;
  //     const bottom_right_position = id + 1 + 2 * columns;
  //     result = [ ...result, top_right_position, bottom_right_position ];
  //   } 

  //   return result.filter( val => val >= 0 && val < columns * rows );

  // }

  // private is_right_column( column: number, columns: number ): boolean {
  //   return column === 2 * columns;
  // }

}
