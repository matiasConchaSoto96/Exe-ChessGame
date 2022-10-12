import { EPieceType } from "../enums/PieceType.enum";

export interface IChessPiece {
  readonly canMove         : boolean;
  readonly color           : string;
  readonly currentPosition : number;
  readonly type            : EPieceType;
  getColor                 : () => string;
  getType                  : () => EPieceType;
}