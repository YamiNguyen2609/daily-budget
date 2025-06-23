import React, { useState } from 'react';

const Year = ({ initialYear = 2025 }) => {
  const currentYear = new Date().getFullYear();
  const [yearSelected, setYearSelected] = useState(currentYear);

  const years = [];

  for (let year = initialYear; year <= 2035; year++) {
    years.push(year);
  }

  return (
    <div class="dropdown col-6">
      <select id="yearcmp"
        className="form-select"
        value={yearSelected}
        onChange={(e) => setYearSelected(Number(e.target.value))}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
        </select>
    </div>
  );
};

export default Year;