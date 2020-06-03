import React from 'react';


function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th onClick={() => props.sortResults()}>
                        Name
                    </th>
                    <th>
                        Phone Number
                    </th>
                    <th>
                       Email
                    </th>
                    <th>
                        Age
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(results => (
                    <tr key={results.email}>
                        <td><img alt="Employee" src={results.picture.thumbnail} className="img-fluid" /></td>
                        <td>{`${results.name.first} ${results.name.last}`}</td>
                        <td>{results.phone}</td>
                        <td>{results.email}</td>
                        <td>{results.dob.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default Table;