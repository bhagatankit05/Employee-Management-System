import React from "react";

const Header = ({ data }) => {
    const name = data?.name || "Guest"; 

    return (
        <div className="flex items-end justify-between">
            <h1 className="text-white text-2xl font-medium">
                Hello <br />
                <span className="text-4xl font-semibold">{name}</span>
            </h1>
            <button className="bg-red-500 px-5 py-2 rounded-sm text-lg font-medium">Log out</button>
        </div>
    );
};

export default Header;
