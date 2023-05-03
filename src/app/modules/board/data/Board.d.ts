import BoardCell from "./BoardCell";

export default interface Board {
    readonly columns: number;
    readonly rows: number;
    readonly cells: BoardCell[];
}