import React, { useState } from 'react'
import Wall from '../Wall'
import { IWall } from '../Wall/Wall.interface'
import {connect, useDispatch, useSelector} from 'react-redux';
import './Room.scss'
import { selectRoom } from '../../store/Room/Room.selectors';
import { addRoom } from '../../store/Room/Room.actions';
import { PAINT_CANS, calculateCan, getLitersRequiredToPaint, getPaintableArea, IPaintCans } from '../../utils/util';


const Room = () => {
  const room = useSelector(selectRoom);
  const dispatch = useDispatch();
  const walls = [{
      height: 0,
      width: 0,
      windows: 0,
      doors: 0,
      number: 1
    },{
      height: 0,
      width: 0,
      windows: 0,
      doors: 0,
      number: 2
    },{
      height: 0,
      width: 0,
      windows: 0,
      doors: 0,
      number: 3
    },{
      height: 0,
      width: 0,
      windows: 0,
      doors: 0,
      number: 4
    }]
  const [cans, setCans] = useState<IPaintCans>(PAINT_CANS)

  function checkArea(): boolean {
    return true
  }

  const disabled = false;
  function getCansRequiresToPaint(){
    const paintableArea = getPaintableArea(room);
    const litersRequiredToPaint = getLitersRequiredToPaint(paintableArea);
    const cans = calculateCan(litersRequiredToPaint)
    setCans(cans)
  }

  function calculate(){
    getCansRequiresToPaint();
  }

  return (
    <>
    <section id="walls">
      <div className="container">
        <p id="info-app">Para calcular a quantidade de tinta, preencha os campos a seguir:</p>
        <div className="row">
          {walls.map(wall => (<Wall key={wall.number} wall={wall}/>))}
        </div>
        <button disabled={disabled} onClick={calculate}> Calcular </button>
      </div>
    </section>
    <section id="result"  className="container">
      <div>
        <h2>Resultado:</h2>
        <p>Para esse comodo vocÊ precisará de</p>
        {cans['0.5L']}
        <p><span>XX latas</span> de tinda de <span>XX Litros</span></p>
      </div>
    </section>
  </>
  )
}

export default connect((state: any) => ({room: state.room}))(Room);
