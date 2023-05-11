export default interface BoardCell {
    readonly id: number;
    readonly neighbours: number[];
    readonly coordinates: number[]; // should check length of 3 later
}