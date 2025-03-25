import React, { useState, useEffect } from 'react';

export default async function CORSAnywhereDemo(props) {
    const [data, setData] = useState([]);

    const cors_api_url = 'http://localhost:8080/';

    useEffect(() => {
        doCORSRequest({ method: 'GET', url: props.url ? props.url : 'https://fakestoreapi.com/products', data: '' })
    }, []);

    const doCORSRequest = (options) => {
        fetch(cors_api_url + options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                // result = Array.isArray(result)
                // result = [...result]
                console.log(result.filter((x) => x.category === 'jewelery'))
                console.log(typeof result)
                // setData(result)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const handlePost = () => {
        doCORSRequest({ method: 'POST', url: props.url, data: '' });
    };

    return (
        data
    );
};