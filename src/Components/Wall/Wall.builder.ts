import { IWall } from "./Wall.interface"

class WallBuilder {
  private wall: IWall = {
    number: 0,
    height: 0,
    width: 0,
    doors: 0,
    windows: 0,
  }

  public static aWall(): WallBuilder {
    return new WallBuilder()
  }

  public setNumber(number: number = 1): WallBuilder{
    this.wall.number = number
    return this;
  }

  public build(): IWall{
    return this.wall;
  }
}

export default WallBuilder