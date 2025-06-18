import React from "react";
import Header from "../other/Header"
import CreateTask from "../other/createTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <CreateTask/>
      <AllTask/>
    
      
    </div>
  );
};

export default AdminDashboard;
