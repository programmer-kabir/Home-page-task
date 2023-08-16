import React, { useEffect, useState } from 'react';

const ServiceData = () => {
    const [boxData, setBoxData] = useState([]);

    useEffect(() => {
        fetch('/public/API/BoxData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBoxData(data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return [boxData];
};

export default ServiceData;
