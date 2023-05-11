export default interface BoardCell {
    readonly row: number;
    readonly id: number;
    readonly neighbours: number[];
    readonly coordinates: number[]; // should check length of 3 later
}