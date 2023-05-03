import BoardCell from "./board-cells/board-cell/BoardCell";

export default interface Board {
    readonly columns: number;
    readonly rows: number;
    readonly cells: BoardCell[];
}