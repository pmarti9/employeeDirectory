import React from 'react'

const Table = () => {
    const [users, setUsers] = React.useState([]);
    return(
<table>
    <thead>
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td>Picture</td>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
    )
}
