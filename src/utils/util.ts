import { Console } from "node:console";
import { IWall } from "../components/Wall/Wall.interface";

export interface IPaintCans {
  '0.5L': number,
  '2.5L': number,
  '3.6L': number,
  '18L': number
}

export const PAINT_CANS = {
  '0.5L': 0,
  '2.5L': 0,
  '3.6L': 0,
  '18L': 0
}
const windowArea = 1.2 * 2;
const doorArea = 1.9 * 0.8;

export const getPaintableArea = (walls: IWall[]) => {
  console.log(walls)
  // const paintableArea = walls.map(wall => {
  //   const wallArea = getWallArea(wall)
  //   const doorArea = getDoorArea(wall)
  //   const windowArea = getWindowArea(wall)
  //   return wallArea - (doorArea + windowArea)
  // })
  return 1
}

export const getLitersRequiredToPaint = (meters: number) => {+
  console.log("meters", meters)

  const AREA_PAINTED_PER_LITER = 5;
  const liters = meters / AREA_PAINTED_PER_LITER
  return liters
}

const getWallArea = ({height, width}: IWall) => {
  return height * width
}

const getWindowArea = ({ windows }: IWall) => {
  return windowArea * windows;
}

const getDoorArea = ({ doors }: IWall) => {
  return doorArea * doors;
}


export const calculateCan = (liters: number) => {
  while (liters != 0){
    if(liters >= 18){ 
      liters -= 18
      PAINT_CANS['18L'] += 1 
    }
    else if(liters >= 3.6){
      liters -= 3.6
      PAINT_CANS['3.6L'] += 1 
    }
    else if(liters >= 2.5){ 
      liters -= 2.5
      PAINT_CANS['2.5L'] += 1
    }
    else if(liters >= 0.5){ 
      liters -= 0.5
      PAINT_CANS['0.5L'] += 1 
    }
    else {
      PAINT_CANS['0.5L'] += 1
      break
    }
  }
  console.log(PAINT_CANS)
  return PAINT_CANS
}

export const isBiggerThan15= (value: number)=> {
  return value > 15;
}

export const isLowerThan1 = (value: number): boolean => {
  return value > 1;
}

export const isBiggerThan = (value: number, anotherValue: number): boolean => {
  return value > anotherValue
}

export const isWindowFit = (height: number, width: number, window: number) : boolean => {
  const windowHeight = 1.2 * window;
  const windowWitdh = 2 * window;
  const isWidthBigger = isBiggerThan(width, windowWitdh)
  const isHeightBigger = isBiggerThan(height, windowHeight)
  return isHeightBigger && isWidthBigger
}

export const isDoorFit = (height: number, width: number, door: number) : boolean => {
  const doorHeight = 1.9;
  const doorWitdh = 0.8 * door;
  const isWidthBigger = isBiggerThan(width, doorWitdh)
  const isHeightBigger = isBiggerThan(height, doorHeight)
  return isHeightBigger && isWidthBigger
}


