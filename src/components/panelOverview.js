import React, { useState } from 'react';

const PanelOverview = (props) => {
  const { data, id } = props;
  return (
    <div className='col-12 my-2'> 
      <div className='border rounded p-3'>
        {data.map((dt, index) => (
          <div key={id + '-' + index}>
          <div className='row'>
            <div className='col-6'>{dt["name"]}</div>
            <div className='col-6 text-end fw-bold'>{dt["value"]}</div>
          </div>
          { index < data.length - 1 && <hr className="my-2" /> }
          </div>
        ))}
      </div>
    </div>
  )
};

export default PanelOverview;
