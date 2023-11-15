import React from "react";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../userContext";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import LoginModal from "../LoginModal/LoginModal";

const token = localStorage.getItem("token");

const NavigationBar = () => {
  const location = useLocation();
  const { value } = useUserContext();
  const { user, setUser, loginState, logoutState } = value;

  

  return (
    <>
      <nav className="">
        <ul className="flex justify-around items-center">
          <li>
            <a href="/">
              <img
                src="/media/logo.png"
                alt="Any Day Logo"
                className="logo"
              ></img>
            </a>
          </li>
             <br/>
          <div className="flex justify-between">
            {location.pathname === "/about" ? (
              <li className="pr-3">
                <Link
                  to="/about"
                  className="bg-primary rounded-full py-2 px-3 text-xl text-on-primary font-bold hover:text-on-primary"
                >
                  About
                </Link>
              </li>
            ) : (
              <li className="pr-10">
                <Link
                  to="/about"
                  className="text-md text-black font-bold hover:text-primary "
                >
                  About
                </Link>
              </li>
            )}
            {location.pathname === "/contact" ? (
              <li className="pr-3">
                <Link
                  to="/contact"
                  className="bg-primary rounded-full py-2 px-3 text-xl text-on-primary font-bold hover:text-on-primary"
                >
                  Contact
                </Link>
              </li>
            ) : (
              <li className="pr-3">
                <Link
                  to="/contact"
                  className="text-md text-black font-bold hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            )}
            {location.pathname === "/test" ? (
              <li className="pr-3">
                <Link
                  to="/test"
                  className="bg-primary rounded-full py-2 px-3 text-xl text-on-primary font-bold hover:text-on-primary"
                >
                  Test
                </Link>
              </li>
            ) : (
              <li className="pr-3">
                <Link
                  to="/test"
                  className="text-md text-black font-bold hover:text-primary"
                >
                  Test
                </Link>
              </li>
            )}
          </div>
          <br/>
          <div className="">
          </div>
          {token ? null : (
            <li>
              <LoginModal />
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;