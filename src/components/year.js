import React, { useState } from 'react';
import Month from './month';

const Year = ({ initialYear = 2025 }) => {
  const [openYear, setOpenYear] = useState(null);
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = initialYear; year <= 2035; year++) {
    years.push(year);
  }

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };


  return (
    <div className="my-4 mx-4">
        <div className="row">
            {years.map((year) => (
                <button key={year}
                    className="btn btn-outline-primary btn-sm border rounded px-3 py-2 text-center col-auto mb-3 mx-1"
                    onClick={() => toggleYear(year)}
                    aria-expanded={openYear === year}
                    aria-controls={`months-collapse-${year}`}>
                    <h6 className="mb-0">{year}</h6>
                </button>
            ))}
        </div>
        <div className="row">
            {openYear && (
                <div id={`months-collapse-${openYear}`} className="collapse show">
                <h5 className="mb-3">Chi tiết tháng của năm {openYear}</h5>
                <Month year={openYear} />
                </div>
            )}
        </div>
    </div>
  );
};

export default Year;