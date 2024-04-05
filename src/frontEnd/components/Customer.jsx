import React from 'react';
import { TableRow, TableCell } from '@mui/material';

class Coustomer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>
                    <img src={this.props.image} alt="profile" />
                </TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
            </TableRow>
        );
    }
}

export default Coustomer;
