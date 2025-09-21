import React, { useState } from 'react';
import { months } from '../helpers/Constants'

const Month = (props) => {

  return (
    <div class="dropdown col-6">
      <select id="monthcmp"
        className="form-select"
        value={props.value}
        onChange={(e) => props.setMonth(Number(e.target.value))}>
        {months.map((month, index) => (
          <option key={month.name} value={month.id}>
            {month.name}
          </option>
        ))}
        </select>
    </div>
  );
};

export default Month;
