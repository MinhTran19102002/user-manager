import {
    Box, IconButton, Tooltip,
    TextField,
    Button,
    Typography,
    Paper,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Modal
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BasicModal from "./ModalProfile";
import ModalEdit from "./ModalEdit";
import React from "react";
import { useForm } from "react-hook-form";
import { deleteUser, updateUserByAdmin } from '../../api/Collections/Authcation';
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
const ButtonAction = (pros) => {
    const { data, fetchData } = pros
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const { setData } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const handleCloseModal = () => {
        setOpen(false); // Đặt trạng thái modal về false để đóng
    };
    const onSubmit = async (formData) => {
        try {
            console.log("dung o day", formData);
            const response = await updateUserByAdmin(formData); // Gọi API login
            if (response.message === 'User updated successfully') { // Kiểm tra nếu cập nhật thành công
                handleCloseModal(); // Đóng modal
                fetchData()
                // console.log(fetchData())
                // setData(response.user)
                // console.log(fetchData1)
                // pros
                // fetchUsers(); // Gọi lại API để lấy danh sách user mới
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    const handleDeleteUser = async (data) => {
        try {
            const email = data.data.email
            console.log(email)
            const response = await deleteUser(email);
            console.log(response);
            // fetchUsers()
        } catch (error) {
            console.error("Error deleting user:");
            // alert(error.response?.data?.message || "Failed to delete user");
        }
    }
    const handleEdit = (rowData) => {
        console.log("Dữ liệu cần sửa:", rowData);
        handleOpen();
        setValue("email", rowData.email);
        setValue("name", rowData.name);
        setValue("address", rowData.address);
        // setValue("gender", rowData.gender);
        // setValue("gender", "male");
    };

    return (
        <Box>
            <Tooltip title="Sửa">
                <IconButton onClick={() => handleEdit(data)}>
                    <EditIcon />
                </IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h5" textAlign="center" gutterBottom>
                            Chỉnh sửa thông tin user
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                            {errors && console.log("Lỗi validation:", errors)}
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                label="Email"
                                // defaultValue={data.dataUser.email}
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
                                // defaultValue={data.dataUser.name}
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
                                // defaultValue={data.dataUser.address}
                                {...register("address", { required: "Vui lòng nhập địa chỉ!" })}
                                error={!!errors.address}
                                helperText={errors.address?.message}
                            />
                            <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                // defaultValue={'male'}
                                {...register("gender", { required: "Vui lòng chọn giới tính!" })}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Nam" />
                                <FormControlLabel value="female" control={<Radio />} label="Nữ" />


                            </RadioGroup>
                            <Button
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
            </Tooltip>
            <Tooltip title="Xóa">
                <IconButton onClick={() => handleDeleteUser(data)}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Box>
    )
}


export default ButtonAction;