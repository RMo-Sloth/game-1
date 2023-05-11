import { TestBed } from '@angular/core/testing';

import { BoardCellsService } from './board-cells.service';

describe('BoardCellsService', () => {
  let service: BoardCellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardCellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generate_records(rows, columns)', () => {

    it('should return an empty array for a single record', () => {
      const result = service.generate_records( 0 , 0 );
      expect(result.length).toBe( 0 );
    });

    it('should add the appropriate amount of records expected for a grid', () => {
      const result = service.generate_records( 1 , 1 );
      expect(result.length).toBe( 1 );

      const result_2 = service.generate_records( 2 , 2 );
      expect(result_2.length).toBe( 4 );

      const result_3 = service.generate_records( 15, 8 );
      expect(result_3.length).toBe( 120 );
    });

    it('should add the relevant row to the record', () => {
      const result = service.generate_records( 3 , 3 );

      expect(result[0].row).toBe( 1 );
      expect(result[1].row).toBe( 1 );
      expect(result[2].row).toBe( 1 );
      expect(result[3].row).toBe( 1 );
      expect(result[4].row).toBe( 1 );
      expect(result[5].row).toBe( 1 );
      expect(result[6].row).toBe( 2 );
      expect(result[7].row).toBe( 2 );
      expect(result[8].row).toBe( 2 );
    });

    it('should assign the correct id', () => {
      const result = service.generate_records(2,2);

      expect(result[0].id).toBe( 0 );
      expect(result[1].id).toBe( 1 );
      expect(result[2].id).toBe( 2 );
      expect(result[3].id).toBe( 3 );
    });

  });
});
