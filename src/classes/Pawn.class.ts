import { EPieceType } from '../typescript/enums/PieceType.enum';
import { IChessPiece } from '../typescript/interfaces/ChessPiece.interface';

export class Pawn implements IChessPiece {
  public canMove         : boolean;
  public color           : string;
  public currentPosition : number; 
  public type            : EPieceType;

  constructor(
    color           : string,
    currentPosition : number,
  ) {
    this.canMove         = false;
    this.color           = color;
    this.currentPosition = currentPosition;
    this.type            = EPieceType.PAWN;
  }

  getColor() : string {
    return this.color;
  }

  getType () : EPieceType {
    return this.type;
  }

  verifyOneCell( isEmpty : boolean ) : boolean {

    // let isTileEmpty = isEmpty();

    if(isEmpty && this.color === 'black') this.canMove = true
    
    if(!isEmpty && this.color === 'black') this.canMove = false
    
    if(isEmpty && this.color === 'white') this.canMove = true

    if(!isEmpty && this.color === 'white') this.canMove = false

    return this.canMove;
  }

  verifyTwoCells() : boolean {
    return true;
  }
}