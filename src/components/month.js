import React, { useState } from 'react';

const monthNamesShort = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
  'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
  'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
];

const generateMockData = () => {
  return monthNamesShort.map((name, index) => ({
    name,
    monthIndex: index + 1,
    income: Math.floor(Math.random() * 10000 + 1000),
    expense: Math.floor(Math.random() * 8000 + 500),
  }));
};

const Month = ({ year }) => {
  const months = generateMockData();
  const [activeMonth, setActiveMonth] = useState(null);

  const toggleMonth = (index) => {
    setActiveMonth(activeMonth === index ? null : index);
  };

  return (
    <div className="row">
      {months.map((month, idx) => {
        const isOpen = activeMonth === idx;
        const collapseId = `collapse-${year}-${idx}`;

        return (
          <div className="col-md-12 mb-3" key={month.monthIndex}>
            <div className="card">
              <button 
                className="w-100 border-0 card-header d-flex justify-content-between align-items-center btn btn-sm rounded py-3" 
                onClick={() => toggleMonth(idx)}
                style={{
                backgroundColor: '#fff',
                boxShadow: 'none',
                cursor: 'default',
                transition: 'none'
              }}>
                <span><b>{month.name}</b></span>
              </button>
              <div className={`collapse ${isOpen ? 'show' : ''}`} id={collapseId}>
                <hr className="my-0" />
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <span>Expense</span>
                        <span>{month.expense.toLocaleString()} đ</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Month;
