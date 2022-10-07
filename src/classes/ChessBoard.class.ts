import { IChessPiece } from "../typescript/interfaces/ChessPiece.interface";
import { Tile } from "./Tile.class";

export class ChessBoard {
  private blackBackYard : IChessPiece[];
  public pieces        : Tile[][];
  private whiteBackYard : IChessPiece[];

  constructor(
    blackBackYard : IChessPiece[],
    pieces        : Tile[][],
    whiteBackYard : IChessPiece[],
  ) {
    this.blackBackYard = blackBackYard;
    this.pieces        = pieces;
    this.whiteBackYard = whiteBackYard;
  }
}