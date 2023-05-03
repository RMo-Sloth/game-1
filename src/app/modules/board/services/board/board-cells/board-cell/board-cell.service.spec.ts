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

    it('should provide an empty array when there are no neighbours', () => {
      const result = service.create( 1,1,0 );

      expect( result.neighbours ).toEqual( [] );
    });

    it('should include neighbor 1 (top)', () => {
      const result = service.create( 2,5,5 );

      expect( result.neighbours ).toContain( 1 );
    });

    it('should include neighbor 2 (right-top)', () => {
      const result = service.create( 2,5,5 );
      
      expect( result.neighbours ).toContain( 3 );
    });

    it('should include neighbor 3 (right-bottom)', () => {
      const result = service.create( 2,5,5 );
      
      expect( result.neighbours ).toContain( 7 );
    });

    it( 'should include neighbor 4 (bottom)', () => {
      const result = service.create( 2,5,5 );

      expect( result.neighbours ).toContain( 9 );
    });

    it('should include neighbor 5 (left-bottom)', () => {
      const result = service.create( 2,5,5 );
      
      expect( result.neighbours ).toContain( 6 );
    });

    it('should include neighbor 6 (left-top)', () => {
      const result = service.create( 2,5,5 );
      
      expect( result.neighbours ).toContain( 2 );
    });

  });

});