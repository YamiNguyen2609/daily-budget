import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Year from "./components/year";
import Month from "./components/month";
import PanelOverview from "./components/panelOverview";
import { GetDataOverview } from "./api/googleSheetApi";
import { months } from "./helpers/Constants";

function App() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      console.log("month", month);
      console.log("year", year);
      console.log("month", months[month]);
      const values = await GetDataOverview(months[month].name, year);
      setData(values);
    } catch (err) {
      setError("Không thể tải dữ liệu.");
    }
  };

  const setMonthValue = (value) => {
    setMonth(value);
    getData(months[value].name, year);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <hr className="my-0" />
      <div className="my-3 mx-3">
        <div className="row">
          <Year value={year} setValue={setYear} />
          <Month value={month} setValue={setMonthValue} />
          {data.length > 0 ? <PanelOverview data={data} id={"September-2025"} /> : null}
          
          {/* <div className="col-12 my-2">
            <button
              type="button"
              className="btn btn-primary w-100"
              style={{ borderColor: "#dee2e6" }}
            >
              Detail
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
