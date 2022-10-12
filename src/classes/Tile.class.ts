import { IChessPiece } from '../typescript/interfaces/ChessPiece.interface';

export class Tile {
  public content         : IChessPiece;
  public highligth       : boolean;
  private tileColor      : string;

  constructor( 
    content         : IChessPiece,
    highligth       : boolean,
    tileColor       : string,
  ) {
    this.content         = content;
    this.highligth       = highligth;
    this.tileColor       = tileColor;
  }

  
}