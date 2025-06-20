import React from "react";




const Header = (props) => {
    const logOutUser = () => {
    localStorage.setItem("loggedInUser","");
    //window.location.reload();
    props.changeUser(null);     
// Redirect to login page or perform any other action
    
}
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-white text-2xl font-medium">
                Hello <br />
                <span className="text-4xl font-semibold">Ankit</span>
            </h1>
            <button onClick={logOutUser} className="bg-red-500 px-5 py-2 rounded-sm text-lg font-medium">Log out</button>
        </div>
    );
};

export default Header;
