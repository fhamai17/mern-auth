import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold">Auth App</h1>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {currentUser ? (
              <img src={currentUser.profilePicture} alt="My profile" className="h-7 w-7 rounded-full object-cover"/>
          ) : (
            <Link to="/sign-in">
              <li>Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
