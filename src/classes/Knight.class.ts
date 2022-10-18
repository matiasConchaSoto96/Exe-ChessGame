import { EPieceType } from "../typescript/enums/PieceType.enum";
import { IChessPiece } from "../typescript/interfaces/ChessPiece.interface";

export class Knight implements IChessPiece {
  public canMove         : boolean;
  public color           : string;
  public currentPosition : number; 
  public type            : EPieceType;

  constructor(
    color           : string,
    currentPosition : number,
  ) {
    this.canMove         = true;
    this.color           = color;
    this.currentPosition = currentPosition;
    this.type            = EPieceType.KNIGHT;
  }

  verifyHorsesJump( position : number, isEmpty : boolean ) {

    let canMove = false;

    if( this.currentPosition + 6 === position && isEmpty ) canMove = true;

    if( this.currentPosition - 6 === position && isEmpty ) canMove = true;

    if( this.currentPosition + 10 === position && isEmpty ) canMove = true;

    if( this.currentPosition - 10 === position && isEmpty ) canMove = true;

    if( this.currentPosition + 15 === position && isEmpty ) canMove = true;

    if( this.currentPosition - 15 === position && isEmpty ) canMove = true;

    if( this.currentPosition + 17 === position && isEmpty ) canMove = true;

    if( this.currentPosition - 17 === position && isEmpty ) canMove = true;

    return canMove;
    
  }

  verifyEating( pieceColor : string, isEmpty : boolean ) {

    let canEat = false;

    if( !isEmpty && this.color !== pieceColor ) canEat = true;

    return canEat;

  }

  getColor() : string {
    return this.color;
  }

  getType () : EPieceType {
    return this.type;
  }
}