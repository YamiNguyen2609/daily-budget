import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Year from './components/year';
import Month from './components/month';
import PanelOverview from './components/panelOverview';

function App() {
  return (
    <div>
      <Header />
      <hr className="my-0" />
      <div className='my-3 mx-3'>
        <div className='row'>
          <Year/>
          <Month/>
          <div className='col-12 my-3'>
            <button type="button" class="btn w-100 btn-success" style={{ 'border-color': '#dee2e6'}}>
              Search
            </button>
          </div>
          <PanelOverview/>
          <div className='col-12 my-3'>
            <button type="button" class="btn btn-primary w-100" style={{ 'border-color': '#dee2e6'}}>
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
