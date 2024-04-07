import React, { Component } from 'react';
import Customer from './components/Customer';
import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    CircularProgress,
} from '@mui/material';
import { styled } from '@mui/system';

const RootPaper = styled(Paper)({
    width: '100%',
    marginTop: (theme) => theme.spacing(3),
    overflowX: 'auto',
});

const RootTable = styled(Table)({
    minWidth: 1080,
});

const RootCircularProgress = styled(CircularProgress)({
    magin: (theme) => theme.spacing(2),
});

class App extends Component {
    state = {
        customers: '',
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);

        this.callApi()
            .then((res) => this.setState({ customers: res }))
            .catch((err) => console.log(err));
    }

    callApi = async () => {
        const res = await fetch('/api/customers');
        const body = await res.json();

        return body;
    };

    progress = () => {
        const { completed } = this.state;

        this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
    };

    render() {
        return (
            <RootPaper>
                <RootTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>아이디</TableCell>
                            <TableCell>사진</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>직업</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>생일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers ? (
                            this.state.customers.map((cus) => (
                                <Customer
                                    key={cus.id}
                                    id={cus.id}
                                    image={cus.image}
                                    name={cus.name}
                                    birthday={cus.birthday}
                                    job={cus.job}
                                    gender={cus.gender}
                                />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="6" align="center">
                                    <RootCircularProgress
                                        variant="determinate"
                                        value={this.state.completed}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </RootTable>
            </RootPaper>
        );
    }
}

export default App;
