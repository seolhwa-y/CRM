import React from 'react';
import { TableRow, TableCell } from '@mui/material';

class Coustomer extends React.Component {
    render() {
        const birthday =
            this.props.birthday.substr(0, 4) +
            '-' +
            this.props.birthday.substr(4, 2) +
            '-' +
            this.props.birthday.substr(6, 2);
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>
                    <img src={this.props.image} alt="profile" />
                </TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell>{this.props.gender === 'M' ? '남성' : '여성'}</TableCell>
                <TableCell>{birthday}</TableCell>
            </TableRow>
        );
    }
}

export default Coustomer;
