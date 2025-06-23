import React, { useState } from 'react';

const monthNamesShort = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Month = () => {
  const months = monthNamesShort.map((name, index) => ({
    name,
    monthIndex: index + 1,
    income: Math.floor(Math.random() * 10000 + 1000),
    expense: Math.floor(Math.random() * 8000 + 500),
  }));
  const [monthSelected, setMonthSelected] = useState(null);

  return (
    <div class="dropdown col-6">
      <select id="monthcmp"
        className="form-select"
        value={monthSelected}
        onChange={(e) => setMonthSelected(Number(e.target.value))}>
        {months.map((month) => (
          <option key={month.name} value={month.name}>
            {month.name}
          </option>
        ))}
        </select>
    </div>
  );
};

export default Month;
