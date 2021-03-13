import React from 'react';
import './App.scss';
import Header from '../../components/Header';
import Room from '../../components/Room';
import {Provider} from 'react-redux';
import store from '../../store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <Room/>
      </Provider>
    </>
  );
}

export default App;
