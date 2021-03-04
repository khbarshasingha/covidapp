import { useState, useEffect } from "react";
import { Details } from "./Components/Details";
import { Row } from "react-bootstrap";
const BASE_URL = "https://api.covid19india.org/raw_data3.json";

function App() {
  const [covidData, setCovidData] = useState([]);
  useEffect(() => {
    const fetchChar = async () => {
      const response = await fetch(BASE_URL);
      response.json().then(response => setCovidData(response.raw_data));
    };
    fetchChar();
  }, []);

  console.log(covidData);

  return (
    <Row>
      {covidData.map(data => (
        <Details key={data.entryid} cs={data.currentstatus} />
      ))}
    </Row>
  );
}

export default App;
