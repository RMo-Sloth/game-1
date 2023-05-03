import { TestBed } from '@angular/core/testing';

import { BoardCellService } from './board-cell.service';

describe('BoardCellService', () => {
  let service: BoardCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe( 'create(column, row, id)', () => {

    it('should have the correct id property', () => {
      const result = service.create( 1,1,0 );
      const result_2 = service.create( 8,9,2 );

      expect( result.id ).toBe( 0 );
      expect( result_2.id ).toBe( 2 );
    });

    it('should have the correct column property', () => {
      const result = service.create( 1,1,0 );
      const result_2 = service.create( 8,9,2 );

      expect( result.column ).toBe( 1 );
      expect( result_2.column ).toBe( 8 );
    });

    it('should have the correct row property', () => {
      const result = service.create( 1,1,0 );
      const result_2 = service.create( 8,9,2 );

      expect( result.row ).toBe( 1 );
      expect( result_2.row ).toBe( 9 );
    });

  });

});
