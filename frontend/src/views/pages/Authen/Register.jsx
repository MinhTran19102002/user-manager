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
    Stack,
} from "@mui/material";
import { login, registerUser } from "../../../api/Collections/Authcation";
import { useNavigate } from "react-router-dom";
// import  from "../AppProvider";
import { useState } from "react";
import { Alert } from "@mui/material";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log("Login Data:", data);
            const response = await registerUser(data); // Gọi API login
            console.log("Login Response:", response);
            // Xử lý phản hồi từ API, ví dụ: lưu token vào localStorage
            setSuccess(true);
            setTimeout(() => {
                navigate("/login"); // Chuyển hướng sau 2s
            }, 1000);
            setLoading(false)
        } catch (error) {
            console.error("Login failed:", error);
            setError("Register failed. Please try again.");
            setLoading(false)
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
                flexDirection: "column"
            }}
        >
            <Stack sx={{
                width: '30%',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)'
            }} spacing={2}>
                {success && <Alert severity="success">Register successful!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            </Stack>
            <Paper elevation={3} sx={{
                padding: 4, borderRadius: "16px", width: "500px", position: "fixed", top: "50%",
                transform: "translate(-50%, -50%)", left: "50%"
            }} square={false} >
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
                    <Button loading={loading} type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
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
