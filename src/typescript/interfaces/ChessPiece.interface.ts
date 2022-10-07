import { EPieceType } from "../enums/PieceType.enum";

export interface IChessPiece {
  canMove         : boolean;
  color           : string;
  currentPosition : string;
  type            : EPieceType;
  getColor        : () => string;
  getType         : () => EPieceType;
}