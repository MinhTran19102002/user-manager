import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { getAllUser } from '../../api/Collections/Authcation';
import { Button } from '@mui/material';
import ButtonAction from './ButtonAction';



const fetchData1 = () => {
    console.log('fasfdsfsfsad')
}



const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {

    const columns = [
        {
            field: 'id', headerName: 'ID', width: 70,
        },
        { field: 'name', headerName: 'Tên', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 2 },
        { field: 'gender', headerName: 'Giới tính', flex: 1 },
        { field: 'address', headerName: 'Địa chỉ', flex: 2 },
        { field: 'role', headerName: 'role', flex: 1 },
        {
            field: 'actions',
            headerName: 'Hành động',
            width: 150,
            renderCell: (params) => (
                <ButtonAction data={params.row} fetchData={fetchData1} />
            ),
        },
    ];

    const [rows, setRows] = useState([]); // State để lưu dữ liệu từ API
    const [loading, setLoading] = useState(true); // State để hiển thị loading

    const fetchData = async () => {
        try {
            console.log('fasfsafssssd')
            const response = await getAllUser() // Gọi API
            const data = response.data.map((user) => ({
                id: user.id,
                name: user.name, // Lấy phần đầu của tên làm firstName
                email: user.email,
                role: user.role,
                address: user.address,
                gender: user.gender === "male" ? "Nam" : "Nữ",
            }));
            setRows(data); // Cập nhật state với dữ liệu từ API
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
        } finally {
            setLoading(false); // Tắt trạng thái loading sau khi fetch xong
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                loading={loading}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
