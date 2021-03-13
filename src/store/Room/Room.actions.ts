import { IWall } from "../../components/Wall/Wall.interface";

const SET_ROOM = 'SET_ROOM';

export function addRoom (room: IWall[]){
  return {
    type: SET_ROOM,
    payload: room
  }
}

