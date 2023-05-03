export default interface BoardCell {
    readonly row: number;
    readonly column: number;
    readonly id: number;
    readonly neighbours: number[];
}