import { useEffect, useState } from 'react';

export default function HomeController() {
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getYear())

    return {
        month: {
            getValue: () => month,
            setValue: setMonth
        },
        year: {
            getValue: () => year,
            setValue: setYear,
        }
    }
}