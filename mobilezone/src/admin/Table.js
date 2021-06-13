import React from 'react'
import './Table.css'
function Table({req}) {
    return (
        <div className="table__container">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>City</th>
                <th>Make</th>
            </tr>
            </thead>
            <tbody>
                {
                    req.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.city}</td>
                            <td>{item.make}</td>
                            

                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default Table;
