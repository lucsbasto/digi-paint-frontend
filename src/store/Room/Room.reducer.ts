import { IWall } from "../../components/Wall/Wall.interface"

const room: IWall[] = [
  {
    height: 0,
    width: 0,
    windows: 0,
    doors: 0,
    number: 1
  },
  {
    height: 0,
    width: 0,
    windows: 0,
    doors: 0,
    number: 2
  },
  {
    height: 0,
    width: 0,
    windows: 0,
    doors: 0,
    number: 3
  },
  {
    height: 0,
    width: 0,
    windows: 0,
    doors: 0,
    number: 4
  },
]

export default function (state: IWall[] = room, action: {type: string, payload: any}) {
  switch(action.type){
    case 'SET_ROOM':
      return {
        state: action.payload
      }
    case 'UPDATE_ROOM':
      return {
        state: action.payload
      }
    default:
      return state
  }
}
