import React, { Suspense, useContext } from "react";
import ResponsiveAppBar from "../../layouts/Topbar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Home from "./Home";
import NotFound from "../NotFound";
import Profile from "./Profile";
import AuthContext from "../../../context";


function Main() {
    const { user } = useContext(AuthContext);

    const currRoute = () => {
        console.log('------')
        console.log(user)
        let route = []
        switch (user.role) {
            case 'admin':
                console.log('------1')
                route = [{ path: '/home', element: <Home /> },
                { path: '/user', element: <User /> }
                ]
                break

            case 'user':
                console.log('------1')
                route = [{ path: '/user', element: <User /> },
                ]
                break
        }
        console.log(route)
        return route;
    }
    return (
        <Box>
            <ResponsiveAppBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* <Route path="/user" element={<User />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} /> */}
                    {currRoute().map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </Box>
    )
}

export default Main;