import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import { set } from "mongoose";

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const authData = useContext(AuthContext);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role);
            setLoggedInUserData(userData.data);
    }}, [authData]);

    const handleLogin = (email, password) => {
        if (email === "admin@example.com" && password === "123") {
            setUser({ role: "admin" });
            localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        } else if (authData && Array.isArray(authData.employee)) {
            const employee = authData.employee.find(
                (e) => email === e.email && password === e.password
            );
            if (employee) {
                setUser({ role: "employee" });
                setLoggedInUserData(employee);
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "employee", email: employee.email,data: employee })
                );
            } else {
                alert("Invalid Credentials");
            }
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <>
            {!user ? <Login handleLogin={handleLogin} /> : null}
            {user?.role === "admin" ? (
                <AdminDashboard changeUser = {setUser} />
            ) : user?.role === "employee" ? (
                <EmployeeDashboard  changeUser = {setUser} data={loggedInUserData} />
            ) : null}
        </>
    );
};

export default App;
