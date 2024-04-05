import React from 'react';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system'; // styled import 추가

const RootPaper = styled(Paper)({
    // styled로 Paper 컴포넌트를 스타일링
    width: '100%',
    marginTop: (theme) => theme.spacing(3),
    overflowX: 'auto',
});

const RootTable = styled(Table)({
    // styled로 Table 컴포넌트를 스타일링
    minWidth: 1080,
});

const customers = [
    {
        id: '1',
        image: 'https://mblogthumb-phinf.pstatic.net/20130619_253/yim530219_1371615735621JW3IC_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-7.jpg?type=w210',
        name: '홍길동',
        birthday: '001212',
        job: '직장인',
    },
    {
        id: '2',
        image: 'https://mblogthumb-phinf.pstatic.net/20130619_219/yim530219_1371615735476KEbko_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-3.jpg?type=w210',
        name: '홍678동',
        birthday: '006781212',
        job: '직678장인',
    },
    {
        id: '3',
        image: 'https://mblogthumb-phinf.pstatic.net/20130619_205/yim530219_1371615735701ak7em_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-11.jpg?type=w210',
        name: '홍345길동',
        birthday: '034501212',
        job: '직장345인',
    },
    {
        id: '4',
        image: 'https://mblogthumb-phinf.pstatic.net/20130619_214/yim530219_1371615736032UNijl_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-12.jpg?type=w210',
        name: '홍354길동',
        birthday: '00231212',
        job: '직345장인',
    },
    {
        id: '5',
        image: 'https://mblogthumb-phinf.pstatic.net/20130619_100/yim530219_1371615736285IOtTs_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-9.jpg?type=w210',
        name: '홍길동23',
        birthday: '0012232312',
        job: '직23장인',
    },
];

function App() {
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
                    {customers.map((cus) => (
                        <Customer
                            key={cus.id}
                            id={cus.id}
                            image={cus.image}
                            name={cus.name}
                            birthday={cus.birthday}
                            job={cus.job}
                        />
                    ))}
                </TableBody>
            </RootTable>
        </RootPaper>
    );
}

export default App;
