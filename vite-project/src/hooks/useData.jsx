import { useState, useEffect } from "react";


// hooks are usually named exports rather than default
export function useData(url) {
    // state variable for holding fetched json data
    const [data, setData] = useState([]);
    const cors_api_url = 'http://localhost:8080/';
    let ignore = false;

    const doCORSRequest = async (options) => {

        await fetch(cors_api_url + options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (!ignore) {
                    setData(result)
                }
            })
            .catch((error) => {
                console.log(error)
            });
        }

        useEffect(() => {
            if (url) {
                console.log('test')
                doCORSRequest({ method: 'GET', url: url, data: '' })
            }
            // cleanup function, in case url changes before complete
            return () => {
                ignore = true;
            };
        }, [url]); // re-run effect if url changes

        // return the data fetched from the given url
        return data;
        // save as useData.jsx in the 'hooks' folder
    }