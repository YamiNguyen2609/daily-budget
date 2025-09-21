import React, { useState } from 'react';
import { months } from '../helpers/Constants'

const Month = (props) => {

  return (
    <div className="dropdown col-12 my-2">
      <select id="monthcmp"
        className="form-select"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}>
        {months.map((month, index) => (
          <option key={month.name} value={index}>
            {month.name}
          </option>
        ))}
        </select>
    </div>
  );
};

export default Month;
