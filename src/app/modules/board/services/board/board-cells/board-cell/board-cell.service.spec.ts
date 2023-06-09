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
      const result = service.create( 1,0 );
      const result_2 = service.create( 8,2 );

      expect( result.id ).toBe( 0 );
      expect( result_2.id ).toBe( 2 );
    });

    // test will disappear in favor of coordinates[0]
    // it('should have the correct column property', () => {
    //   const result = service.create( 1,1,0 );
    //   const result_2 = service.create( 8,9,2 );

    //   expect( result.column ).toBe( 1 );
    //   expect( result_2.column ).toBe( 3 );
    // });
    
    // test will disappean
    // it('should have the correct row property', () => {
    //   const result = service.create( 1,1,0 );
    //   const result_2 = service.create( 8,9,2 );

    //   expect( result.row ).toBe( 1 );
    //   expect( result_2.row ).toBe( 1 );
    // });

    describe( 'coordinates', () => {
      it('should assign the correct first coordinate', () => {
        expect( service.create( 1,0 ).coordinates[0] ).toBe( 1 );

        expect( service.create( 2,0 ).coordinates[0] ).toBe( 1 );
        expect( service.create( 2,1 ).coordinates[0] ).toBe( 1 );
        expect( service.create( 2,2 ).coordinates[0] ).toBe( 2 );
        expect( service.create( 2,3 ).coordinates[0] ).toBe( 2 );
        expect( service.create( 2,4 ).coordinates[0] ).toBe( 3 );
        expect( service.create( 2,5 ).coordinates[0] ).toBe( 3 );
      });

      it('should assign the correct second coordinate', () => {
        expect( service.create( 1,0 ).coordinates[1] ).toBe( 1 );

        expect( service.create( 2,0 ).coordinates[1] ).toBe( 1 );
        expect( service.create( 2,1 ).coordinates[1] ).toBe( 2 );
        expect( service.create( 2,2 ).coordinates[1] ).toBe( 0 );
        expect( service.create( 2,3 ).coordinates[1] ).toBe( 1 );
        expect( service.create( 2,4 ).coordinates[1] ).toBe( 0 );
        expect( service.create( 2,5 ).coordinates[1] ).toBe( 1 );
      });

      it('should assign the correct third coordinate', () => {
        expect( service.create( 1,0 ).coordinates[2] ).toBe( 1 );

        expect( service.create( 2,0 ).coordinates[2] ).toBe( 1 );
        expect( service.create( 2,1 ).coordinates[2] ).toBe( 2 );
        expect( service.create( 2,2 ).coordinates[2] ).toBe( 1 );
        expect( service.create( 2,3 ).coordinates[2] ).toBe( 2 );
        expect( service.create( 2,4 ).coordinates[2] ).toBe( 2 );
        expect( service.create( 2,5 ).coordinates[2] ).toBe( 3 );
      });

    });

    // it('should provide an empty array when there are no neighbours', () => {
    //   const result = service.create( 1,1,0 );

    //   expect( result.neighbours ).toEqual( [] );
    // });

    // it('should include neighbor 1 (top)', () => {
    //   const result = service.create( 5,6,11 );

    //   expect( result.neighbours ).toContain( 1 );
    // });

    // it('should include neighbor 2 (right-top)', () => {
    //   const result = service.create( 5,6,11 );
      
    //   expect( result.neighbours ).toContain( 12 );
    // });

    // it('should include neighbor 2 (right-top) for even rows as well', () => {
    //   const result = service.create( 5,6,12 );
      
    //   expect( result.neighbours ).toContain( 3 );
    // });

    // it('should include bottom_right_position', () => {
    //   const result = service.create( 5,6,11 );
      
    //   expect( result.neighbours ).toContain( 22 );
    // });

    // it('should include bottom_right_position for even columns', () => {
    //   const result = service.create( 5,6,12 );
      
    //   expect( result.neighbours ).toContain( 13 );
    // });

    // it('should not include bottom_right_position for the last column', () => {
    //   const result = service.create( 5,6,19 );
      
    //   expect( result.neighbours ).not.toContain( 20 );
    // });

    // it( 'should include neighbor 4 (bottom)', () => {
    //   const result = service.create( 5,6,11 );

    //   expect( result.neighbours ).toContain( 21 );
    // });

    // it('should include bottom_left_position for even rows', () => {
    //   const result = service.create( 5,6,11 );
      
    //   expect( result.neighbours ).toContain( 20 );
    // });

    // it('should include bottom_left_position for odd rows', () => {
    //   const result = service.create( 5,6,12 );
      
    //   expect( result.neighbours ).toContain( 11 );
    // });

    // it('should not include bottom_left_position for the first column', () => {
    //   const result = service.create( 5,6,20 );
      
    //   expect( result.neighbours ).not.toContain( 29 );
    // });

    // it('should include top_left_position for even rows', () => {
    //   const result = service.create( 5,6,11 );
      
    //   expect( result.neighbours ).toContain( 10 );
    // });

    // it('should include top_left_position for odd rows', () => {
    //   const result = service.create( 5,6,12 );
      
    //   expect( result.neighbours ).toContain( 1 );
    // });

    // it('should not include top_left_position for the first column', () => {
    //   const result = service.create( 5,6,20 );
      
    //   expect( result.neighbours ).not.toContain( 9 );
    // });

  });

});
