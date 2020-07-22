import React from 'react'

class Table extends React.Component {
    state = {
        users
    }
    componentDidMount() {
        API.getUsers().then(results => this.setState({ users: results}))
    }

    render(){
        return(
            <table>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    <TableBody />
                </tbody>
            </table>
        )
    }
}
