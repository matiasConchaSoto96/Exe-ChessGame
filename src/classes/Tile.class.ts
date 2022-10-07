import { IChessPiece } from "../typescript/interfaces/ChessPiece.interface";

export class Tile {
  private tileColor : string;
  public  content   : IChessPiece;
  public  highligth : boolean;

  constructor( 
    content   : IChessPiece,
    highligth : boolean, 
    tileColor : string,
  ) {
    this.content   = content;
    this.highligth = highligth;
    this.tileColor = tileColor;
  }

  
}