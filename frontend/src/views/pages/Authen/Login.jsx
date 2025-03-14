/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import { checkToken, login } from "../../../api/Collections/Authcation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../context";
import React, { useEffect } from "react";
// import  from "../AppProvider";
import { useState } from "react";
import { Alert } from "@mui/material";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const { loginData } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            console.log("Login Data:", data);
            const response = await login(data); // Gọi API login
            console.log("Login Response:", response);
            // Xử lý phản hồi từ API, ví dụ: lưu token vào localStorage
            if (response.access_token) {
                localStorage.setItem("token", response.access_token);
                // const userData = response.user
                loginData(response.user)
                setSuccess(true);
                setTimeout(() => {
                    navigate("/home"); // Chuyển hướng sau 2s
                }, 1000);
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError("Login failed. Please try again.");
        }

    };

    const checkT = async () => {
        try {
            const data = await checkToken()
            navigate("/home");
        } catch (error) {
            localStorage.removeItem("token");
        }

    }

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            checkT()
        }
    }, [navigate]);

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
            {success && <Alert severity="success">Login successful!</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <Paper elevation={3} sx={{
                padding: 4, borderRadius: "16px", width: "500px", position: "fixed", top: "50%",
                transform: "translate(-50%, -50%)", left: "50%"
            }} square={false} >
                <Typography variant="h5" textAlign="center" gutterBottom>
                    Đăng nhập
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Đăng nhập
                    </Button>

                </Box>
                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={() => navigate("/register")}
                >
                    Đăng ký
                </Button>
            </Paper>
        </Container>
    );
};

export default Login;
