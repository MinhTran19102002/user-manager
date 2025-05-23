import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Modal
} from "@mui/material";
import { useForm } from "react-hook-form";
import { updateUser } from '../../api/Collections/Authcation';
import AuthContext from '../../context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalEdit(data, isOpen) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { setData } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        // setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (isOpen) {
            handleOpen()
        }
    }, [isOpen]);

    const handleCloseModal = () => {
        setOpen(false); // Đặt trạng thái modal về false để đóng
    };
    const onSubmit = async (data) => {
        // console.log('rffasfsafdaf')
        try {
            setLoading(true)
            console.log("Login Data:", data);
            const response = await updateUser(data); // Gọi API login
            if (response.message === 'User updated successfully') { // Kiểm tra nếu cập nhật thành công
                handleCloseModal(); // Đóng modal
                setData(response.user)
                // fetchUsers(); // Gọi lại API để lấy danh sách user mới
            }
            setLoading(false)
        } catch (error) {
            console.error("Login failed:", error);
            setLoading(false)
        }
    }
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Chỉnh sửa thông tin cá nhân
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            label="Email"
                            defaultValue={data?.data.email}
                            {...register("email", { required: "Vui lòng nhập email!" })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            InputProps={{ readOnly: true }}
                        />
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            label="Tên"
                            defaultValue={data?.data.name}
                            {...register("name", { required: "Vui lòng nhập tên!" })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            label="Địa chỉ"
                            defaultValue={data?.data.address}
                            {...register("address", { required: "Vui lòng nhập địa chỉ!" })}
                            error={!!errors.address}
                            helperText={errors.address?.message}
                        />
                        <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue={data?.data.gender}
                            {...register("gender", { required: "Vui lòng chọn giới tính!" })}
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Nam" />
                            <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                        </RadioGroup>
                        <Button
                            loading={loading}
                            type='submit'
                            sx={{ mt: 2 }}
                            variant="contained"
                            fullWidth
                            color="primary"
                        >
                            Chỉnh sửa
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}