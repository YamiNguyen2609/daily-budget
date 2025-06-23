import React, { useState } from 'react';

const PanelOverview = () => {
  const [amounts, setAmounts] = useState({
    acb: 0,
    lio: 0,
    kbank: 0,
    cash: 0
  });

  return (
    <div className='col-12'>
      <div className='border rounded p-3'>
        <div className='row'>
          <div className='col-6'>ACB</div>
          <div className='col-6 text-end fw-bold'>1.000.000 đ</div>
        </div>
        <hr className="my-2" />
        <div className='row'>
          <div className='col-6'>Lio</div>
          <div className='col-6 text-end fw-bold'>1.100.000 đ</div>
        </div>
        <hr className="my-2" />
        <div className='row'>
          <div className='col-6'>KBank</div>
          <div className='col-6 text-end fw-bold'>1.200.000 đ</div>
        </div>
        <hr className="my-2" />
        <div className='row'>
          <div className='col-6'>Cash</div>
          <div className='col-6 text-end fw-bold'>1.300.000 đ</div>
        </div>
      </div>
    </div>
    
  );
};

export default PanelOverview;
