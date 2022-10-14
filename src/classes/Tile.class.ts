import { IChessPiece } from '../typescript/interfaces/ChessPiece.interface';

export class Tile {
  public content         : IChessPiece;
  public highligth       : boolean;
  private position       : number;
  private tileColor      : string;

  constructor( 
    content   : IChessPiece, position  : number,
    highligth : boolean,     tileColor : string,
  ) {
    this.content         = content;
    this.position        = position;
    this.highligth       = highligth;
    this.tileColor       = tileColor;
  }

  
}