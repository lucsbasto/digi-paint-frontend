import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Wall from './Components/Wall/Wall';
import { IWall } from './Components/Wall/Wall.interface';

function App() {
  return (
    <>
    <Header/>
    <Wall/>
    <Wall/>
    <Wall/>
    <Wall/>
    </>
  );
}

export default App;
