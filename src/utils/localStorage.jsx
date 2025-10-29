import React, { useEffect, useState } from 'react';

const localStorage = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('/employees.json')
        .then(res => res.json())
        .then((data => {
            console.log('here is data',data);
            setEmployees(data.employees);
        }))
    }, [])

    return (
        <div>
            this is localStorage
        </div>
    );
};

export default localStorage;