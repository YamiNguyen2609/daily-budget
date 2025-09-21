import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Year from './components/year';
import Month from './components/month';
import PanelOverview from './components/panelOverview';
import { GetDataOverview } from "./api/googleSheetApi";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    debugger
    const getData = async () => {
      try {
        const values = await GetDataOverview();
        setData(values);
      } catch (err) {
        setError("Không thể tải dữ liệu.");
      }
    };

    getData();
  }, []);

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
