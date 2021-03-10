import React, { useState } from 'react'
import Wall from '../Wall/Wall'
import WallBuilder from '../Wall/Wall.builder'
import { IWall } from '../Wall/Wall.interface'

class Room extends React.Component {
  constructor(){
      super();
      this.state = {
        room: [
          WallBuilder.aWall().setNumber(1).build(),
          WallBuilder.aWall().setNumber(2).build(),
          WallBuilder.aWall().setNumber(3).build(),
          WallBuilder.aWall().setNumber(4).build(),
        ]
      }
    } 

  return (
    <>
    <section id="walls">
      <div className="container">
        <p id="info-app">Para calcular a quantidade de tinta, preencha os campos a seguir:</p>
        <div className="row">
            {this.state.room.map((wall: IWall) => {
              return (
                <div className="box-form">
                  <h2 className={`bg-${wall.number}`}>Parede {wall.number}</h2>
                  <form>
                    <Wall wall={wall}/>
                  </form>
                </div>
              )
            })}
        </div>
        <button>Calcular</button>
      </div>
    </section>
  </>
  )
}