import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const authData = useContext(AuthContext);

    useEffect(() => {
        setLocalStorage(); // Ensure localStorage has data on app load
    }, []);

    useEffect(() => {
        if (authData) {
            const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
            if (loggedInUser) {
                setUser({ role: loggedInUser.role });
                if (loggedInUser.role === "employee" && authData.employee) {
                    const employee = authData.employee.find(e => e.email === loggedInUser.email);
                    setLoggedInUserData(employee);
                }
            }
        }
    }, [authData]);

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
                    JSON.stringify({ role: "employee", email: employee.email })
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
                <AdminDashboard />
            ) : user?.role === "employee" ? (
                <EmployeeDashboard data={loggedInUserData} />
            ) : null}
        </>
    );
};

export default App;
