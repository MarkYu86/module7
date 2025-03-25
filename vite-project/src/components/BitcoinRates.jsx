import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const [emoji, setEmoji] = useState("🤣");

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

  const changeMood = () => {
    if (emoji === "😂") {
      setEmoji("🤣");
    } else if (emoji === "🤣") {
      setEmoji("🙃");
    } else {
      setEmoji("😂");
    }
  };


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

      <p>
        Current Bitcoin Price in {currency}: {price ? price : "Loading..."}
      </p>
      {/* Displaying the current emoji */}
      <div>
        <span>{emoji}</span>
        <button onClick={changeMood}>Change Mood</button>
      </div>
    </div>
  );
}
export default BitcoinRates