import React from 'react'
import './Wall.css'
import { IWall } from './Wall.interface'


export default function Wall() {
  const wall: IWall = {
    height: 0,
    width: 0,
    doors: 0,
    windows: 0
   }
   const walls: IWall[] = [wall, wall, wall, wall]

  return (
    <div>
      <h2 className="bg-1">Parede 1</h2>
      <form>
        <label>
          <i className="fas fa-arrows-alt-v color-1"></i>
          <input
            name="altura"
            max="15"
            min="1"
            type="number"
            placeholder="Altura em metros"
          />
        </label>
        <label>
          <i className="fas fa-arrows-alt-h color-1"></i>
          <input
            name="largura"
            max="15"
            min="1"
            type="number"
            placeholder="Largura em metros"
          />
        </label>
        <label>
          <i className="fas fa-door-closed color-1"></i>
          <input
            name="portas"
            type="number"
            placeholder="Nº de portas"
          />
        </label>
        <label>
          <i className="fas fa-window-frame color-1"></i>
          <input 
          name="janelas"
          type="number"      
          placeholder="Nº de janelas"
          />
        </label>
      </form>
    </div>
  )
}
