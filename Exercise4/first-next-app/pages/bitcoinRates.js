import { useEffect, useState } from 'react';
import App from '@/app/page';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [rate, setRate] = useState(null);

    useEffect(() => {
        const fetchBitcoinRate = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
            const data = await response.json();
            setRate(data.bitcoin[currency.toLowerCase()]);
        };
        fetchBitcoinRate();
    }, [currency]);

    const options = currencies.map(curr => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <>
        <App/>
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>

            <div>
                {rate !== null ? (
                    <p>
                        1 Bitcoin = {rate} {currency}
                    </p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
        </>
    );
}
