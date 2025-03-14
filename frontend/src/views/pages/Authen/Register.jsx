/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
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
} from "@mui/material";
import { login, registerUser } from "../../../api/Collections/Authcation";
import { useNavigate } from "react-router-dom";
// import  from "../AppProvider";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            console.log("Login Data:", data);
            const response = await registerUser(data); // Gọi API login
            console.log("Login Response:", response);
            // Xử lý phản hồi từ API, ví dụ: lưu token vào localStorage
            navigate("/login");
        } catch (error) {
            console.error("Login failed:", error);
        }

    };

    return (

        <Container
            maxWidth={false} // Cho phép full width
            sx={{
                width: "100vw", // Chiều rộng 100% màn hình
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8, borderRadius: "16px", width: "500px" }} square={false} >
                <Typography variant="h5" textAlign="center" gutterBottom>
                    Đăng ký
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        label="Name"
                        {...register("name", { required: "Vui lòng nhập tên!" })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        label="Email"
                        {...register("email", { required: "Vui lòng nhập email!" })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        label="Mật khẩu"
                        {...register("password", { required: "Vui lòng nhập mật khẩu!" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        {...register("gender", { required: "Vui lòng chọn giới tính!" })}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Nam" />
                        <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                    </RadioGroup>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        label="Địa chỉ"
                        {...register("address", { required: "Vui lòng nhập địa chỉ!" })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Đăng ký
                    </Button>
                </Box>
                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={() => navigate("/login")}
                >
                    Quay lại
                </Button>
            </Paper>
        </Container>
    );
};

export default Register;
