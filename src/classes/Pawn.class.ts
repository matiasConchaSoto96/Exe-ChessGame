import { EPieceType } from '../typescript/enums/PieceType.enum';
import { IChessPiece } from '../typescript/interfaces/ChessPiece.interface';

export class Pawn implements IChessPiece {
  public canMove         : boolean;
  public color           : string;
  public currentPosition : number; 
  public type            : EPieceType;
  private wasMoved       : boolean;

  constructor(
    color           : string,
    currentPosition : number,
  ) {
    this.canMove         = true;
    this.color           = color;
    this.currentPosition = currentPosition;
    this.type            = EPieceType.PAWN;
    this.wasMoved        = false;
  }

  verifyOneCell( position : number, isEmpty : boolean ) : boolean {

    let canMove = false;

    // if(isEmpty) this.canMove = true
    if(isEmpty && this.color === 'black' && this.currentPosition + 8 === position) {
      // this.canMove = false;
      canMove = true;
    }
    
    if(isEmpty && this.color === 'white' && this.currentPosition - 8 === position) {
      // this.canMove = false;
      canMove = true;
    }

    return canMove;
  }

  verifyTwoCells( position : number, isEmpty : boolean ) : boolean {

    if(!this.wasMoved) return false;

    let canMove = false;

    if(isEmpty && this.color === 'black' && this.currentPosition + 16 === position) {
      canMove = true;
      this.wasMoved = true;
    }

    if(isEmpty && this.color === 'white' && this.currentPosition - 16 === position) {
      canMove = true;
      this.wasMoved = true;
    }

    return canMove;

  }

  verifyDiagonalEating( pieceColor : string, isEmpty : boolean ) : boolean {

    let canEat = false;

    if(!isEmpty && this.color !== pieceColor) canEat = true;

    return canEat;
  }

  getColor() : string {
    return this.color;
  }

  getType () : EPieceType {
    return this.type;
  }
}