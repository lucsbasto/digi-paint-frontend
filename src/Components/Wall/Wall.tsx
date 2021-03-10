import React, { useState } from 'react'
import { IWall } from './Wall.interface'

const Wall = ({wall}: { wall: IWall }) => {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [windows, setWindows] = useState('')
  const [doors, setDoors] = useState('')

  return (
    <>
      <label>
        <i className={`fas fa-arrows-alt-v color-${wall.number}`}></i>
        <input
          name="altura"
          max="15"
          min="1"
          type="number"
          placeholder="Altura em metros"
          value={height}
          onChange={(e) => {setHeight(e.target.value)}}
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
          onChange={(e) => {setWidth(e.target.value)}}
        />
      </label>
      <label>
        <i className={`fas fa-door-closed color-${wall.number}`}></i>
        <input
          name="portas"
          type="number"
          placeholder="Nº de portas"
          value={doors}
          onChange={(e) => {setDoors(e.target.value)}}
        />
      </label>
      <label>
        <i className={`fas fa-window-frame color-${wall.number}`}></i>
        <input 
        name="janelas"
        type="number"      
        placeholder="Nº de janelas"
        value={windows}
        onChange={(e) => {setWindows(e.target.value)}}
        />
      </label>
    </>
  )
}

export default Wall
