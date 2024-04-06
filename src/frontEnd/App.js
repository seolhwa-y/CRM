import React, { Component } from 'react';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system';

const RootPaper = styled(Paper)({
    width: '100%',
    marginTop: (theme) => theme.spacing(3),
    overflowX: 'auto',
});

const RootTable = styled(Table)({
    minWidth: 1080,
});

class App extends Component {
    state = {
        customers: '',
    };

    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ customers: res }))
            .catch((err) => console.log(err));
    }

    callApi = async () => {
        const res = await fetch('/api/customers');
        const body = await res.json();

        return body;
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
                            <TableCell>생일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers
                            ? this.state.customers.map((cus) => (
                                  <Customer
                                      key={cus.id}
                                      id={cus.id}
                                      image={cus.image}
                                      name={cus.name}
                                      birthday={cus.birthday}
                                      job={cus.job}
                                  />
                              ))
                            : null}
                    </TableBody>
                </RootTable>
            </RootPaper>
        );
    }
}

export default App;
