import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    const [user, setUser] = useState(null)
    const [loggedInUserData,setLoggedInUserData] = useState()
    const authData = useContext(AuthContext)
    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser")
    }, [authData])


    const handleLogin = (email, password) => {
        if (email == "admin@me.com" && password == 123) {
            setUser({ role: "admin" })
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
        } else if (authData && Array.isArray(authData.employee)) {
            const employee = authData.employee.find((e) => { email == e.email && password == e.password })
            if (employee) {
                setUser('employee')
                setLoggedInUserData('employee')
                
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email: employee.email }))
            }

        }
        else {
            alert("Invalid Credentials")
        }

    }

    return (
        <>
            {!user ? <Login handleLogin={handleLogin} /> : ""}
            {user == 'admin' ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData}/>:null )}
        </>
    )

}
export default App;