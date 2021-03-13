import React, { useState } from 'react'
import { isBiggerThan15, isLowerThan1, isWindowFit, isDoorFit } from '../../utils/util';
import { IWall } from './Wall.interface';
import './Wall.scss'

const Wall = ({wall}: {wall: IWall}) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);

  function handleHeight(value: number) {
    if(isLowerThan1(value)) setHeight(1)
    if(isBiggerThan15(value)) setHeight(15)
    else setHeight(value)
    wall.height = height
  }

  function handleWidth(value: number) {
    if(isLowerThan1(value)) setWidth(1)
    if(isBiggerThan15(value)) setWidth(15)
    else setWidth(value)
  }

  function handleWindow(value: number){
    if (isWindowFit(height, width, value)) setWindows(value)
  }

  function handleDoor(value: number){
    if (isDoorFit(height, width, value)) setDoors(value)
  }

  return (
    <>
      <div className="box-form">
      <h2 className={`bg-${wall.number}`}>Parede {wall.number}</h2>
      <form>
        <label>
          <i className={`fas fa-arrows-alt-v color-${wall.number}`}></i>
          <input
            name="altura"
            max="15"
            min="1"
            type="number"
            placeholder="Altura em metros"
            value={height}
            onChange={(e) => handleHeight(Number(e.target.value))}
          />
        </label>
        <label>
        <i className={`fas fa-arrows-alt-h color-${wall.number}`}></i>
        <input
          name="largura"
          max="15"
          min="1"
          type="number"
          placeholder="Largura em metros"
          value={width}
          onChange={(e) => handleWidth(Number(e.target.value))}
        />
      </label>
        <label>
          <i className={`fas fa-door-closed color-${wall.number}`}></i>
          <input
            name="portas"
            type="number"
            placeholder="Nº de portas"
            value={doors}
            onChange={(e) => handleDoor(Number(e.target.value))}
          />
        </label>
        <label>
        <i className={`fas fa-window-frame color-${wall.number}`}></i>
        <input 
        name="janelas"
        type="number"      
        placeholder="Nº de janelas"
        value={windows}
        onChange={(e) => handleWindow(Number(e.target.value))}
        />
      </label>
      </form>
      </div>
    </>
  )
}

export default Wall
