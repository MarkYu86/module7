import { useState, useEffect, useRef } from "react";

// hooks are usually named exports rather than default
export function useData(url) {
    // state variable for holding fetched json data
    const [data, setData] = useState([]);
    const corsApiUrl = 'http://localhost:8080/'; // Proxy URL
    const ignore = useRef(false);

    const doCORSRequest = async (options) => {
        try {
            const response = await fetch(corsApiUrl + options.url, {
                method: options.method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const result = await response.json();
            if (!ignore.current) {
                setData(result);
            }
        } catch (error) {
            console.log('Error during CORS request:', error);
        }
    };

    useEffect(() => {
        if (url) {
            console.log('Fetching data from:', url);
            doCORSRequest({ method: 'GET', url: url });
        }

        // Cleanup function to avoid setting state after component unmounts
        return () => {
            ignore.current = true;
        };
    }, [url]); // re-run effect if URL changes

    // Return the fetched data
    return data;
}
