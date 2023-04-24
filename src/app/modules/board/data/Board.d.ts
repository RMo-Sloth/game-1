import BoardCell from "./BoardCell";

export default interface Board {
    columns: number;
    rows: number;
    cells: BoardCell[];
}