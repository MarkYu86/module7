import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    console.log("running effect");

    let ignore = false;

    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}"
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setPrice(json.bitcoin[currency]);
        }
      })
      .catch((error) => {
        console.error(error, "Error fetchning api");
      });
    return () => {
      ignore = true;
      console.log("cleanup effect");
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}
