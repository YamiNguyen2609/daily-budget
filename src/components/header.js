import React, { useEffect, useState } from 'react';

const Header = () => {
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDatetime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

    const formatDateTime = (date) => {
        const pad = (n) => n.toString().padStart(2, '0');
        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1);
        const year = date.getFullYear();
        const hour = pad(date.getHours());
        const minute = pad(date.getMinutes());
        const second = pad(date.getSeconds());
        return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
    };    

  return (
    <div className="py-3 px-3">
        <h4 className="mb-2">Yami Nguyen</h4>
        <h5 className="mb-0">{formatDateTime(datetime)}</h5>
    </div>
  );
};

export default Header;
