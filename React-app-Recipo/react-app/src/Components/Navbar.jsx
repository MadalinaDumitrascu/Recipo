import React, { useState, useEffect, useRef } from "react";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import { RiUserFill, RiUserLine } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ro: { nativeName: "Romana" },
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const [lngChange, setLngChange] = useState(
    i18n.language == "en" ? false : true
  );
  const [isLoggedIn, setLoggedIn] = useState();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const langRadio = document.querySelectorAll('.lang')
  const navigate = useNavigate();
  const ref = useRef();
  const HandleLogout = () => {
    axios
      .get("https://localhost:7291/api/Users/Logout", { withCredentials: true })
      .then((res) => {
        localStorage.removeItem("Authorized");
        window.location.reload(false);
      });
  };
  useEffect(() => {
    i18n.language == 'en' ? setLngChange(false) : setLngChange(true)
    i18n.language == 'en' ? langRadio.forEach(lng => lng.id == 'en' ? lng.checked = true : lng.checked = false) : langRadio.forEach(lng => lng.id == 'ro' ? lng.checked = true : lng.checked = false )
  },[langRadio])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.includes(event.target)) {
        DropdownClose();
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
  }, [ref]);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("Authorized") !== null ? true : false);
  }, [isLoggedIn, nav, dropdown]);

  const OpenClose = () => {
    setNav(!nav);
  };
  const Close = () => {
    setNav(false);
  };
  const DropdownOpenClose = () => {
    setTimeout(() => {
      setDropdown(!dropdown);
    }, 100);
  };
  const ToDashboard = () => {
    navigate("/Dashboard");
  };
  const DropdownClose = () => {
    setDropdown(false);
  };
  return (
    <>
      <div
        className={
          !nav
            ? "bg-translate"
            : "w-full h-full ease-in-out duration-1000 bg-black bg-opacity-70 fixed z-20 backdrop-blur-sm"
        }
        onClick={Close}
      ></div>
      <div className="flex justify-between">
        <div className="flex m-3 mt-3 items-center">
          <div>
            <TfiMenu
              size={30}
              className="m-1 cursor-pointer active:scale-90 duration-150"
              onClick={OpenClose}
            />
          </div>
          <h1
            onClick={ToDashboard}
            className=" ml-3 font-semibold cursor-pointer text-2xl"
          >
            RECIPO
          </h1>
        </div>

        <div className="m-3 flex gap-5">
          {/* {!lngChange ? (
            <button
              className="bg-gray-300 rounded-full hover:scale-110 active:scale-105 font-medium px-3 hover:bg-gray-100 hover:border hover:border-gray-300 border border-transparent active:bg-gray-400 duration-150 py-0"
              key={lngs.en}
              onClick={() => {
                setLngChange(true);
                i18n.changeLanguage("ro");
                window.location.reload();
              }}
            >
              En
            </button>
          ) : (
            <button
              className="bg-gray-300 rounded-full hover:scale-110 active:scale-105 font-medium px-3 hover:bg-gray-200 hover:border hover:border-gray-300 border border-transparent active:bg-gray-400 duration-150 py-0"
              key={lngs.ro}
              onClick={() => {
                setLngChange(false);
                i18n.changeLanguage("en");
                window.location.reload();
              }}
            >
              Ro
            </button>
          )} */}
          <div className="bg-gray-300 rounded-full relative object-contain z-10 py-0 duration-500 flex items-center">
            <div>
              <input
                type="radio"
                name="language"
                className="lang hidden peer"
                id="en"
              />
              <label
                htmlFor="en"
                className="peer-checked:bg-black duration-500 font-normal z-50 px-4 py-2 flex peer-checked:text-white peer-checked:font-medium rounded-full"
                onClick={() => {
                  i18n.changeLanguage("en");
                  window.location.reload()
                }}
              >
                En
              </label>
            </div>
            <div>
              <input
                id="ro"
                type="radio"
                name="language"
                className="lang hidden peer"
              />
              <label
                htmlFor="ro"
                className="peer-checked:bg-black duration-500 font-normal z-50 px-4 flex py-2 peer-checked:text-white peer-checked:font-medium rounded-full"
                onClick={() => {
                  i18n.changeLanguage("ro");
                  window.location.reload();
                }}
              >
                Ro
              </label>
            </div>
          </div>

          {!isLoggedIn ? (
            <RiUserLine
              size={25}
              className={
                !dropdown
                  ? "hidden lg:flex mx-5 mt-2 cursor-pointer items-center active:scale-110 scale-125 duration-150"
                  : "hidden lg:flex mx-5 mt-2 cursor-pointer items-center active:scale-125 duration-150 scale-150"
              }
              onClick={DropdownOpenClose}
            />
          ) : (
            <RiUserFill
              size={25}
              className={
                !dropdown
                  ? "hidden lg:flex mx-5 mt-2 cursor-pointer items-center active:scale-110 scale-125 duration-150"
                  : "hidden lg:flex mx-5 mt-2 cursor-pointer items-center active:scale-125 duration-150 scale-150"
              }
              onClick={DropdownOpenClose}
            />
          )}
          <div
            className={
              !dropdown
                ? "absolute hidden bg-white z-[18] right-2 top-[62px]"
                : "absolute flex bg-white z-[18] right-2 top-[62px] duration-300"
            }
            onClick={DropdownClose}
          >
            <ul className="flex flex-col duration-200 shadow-xl shadow-black/30">
              {isLoggedIn && (
                <Link to={"/User"}>
                  <li className="border-b border-b-gray-200 py-2 px-3 hover:bg-orange-500 cursor-pointer">
                    <Trans i18nKey="description.nav0" />
                  </li>
                </Link>
              )}
              {isLoggedIn && (
                <Link to={"/User/Options"}>
                  <li className="border-b border-b-gray-200 py-2 px-3 hover:bg-orange-500 cursor-pointer">
                    <Trans i18nKey="description.nav1" />
                  </li>
                </Link>
              )}
              {!isLoggedIn && (
                <Link to="/Register">
                  <li className="border-b border-b-gray-200 py-2 px-3 hover:bg-orange-500 cursor-pointer">
                    <Trans i18nKey="description.nav2" />
                  </li>
                </Link>
              )}
              {isLoggedIn ? (
                <li
                  onClick={HandleLogout}
                  className="border-b border-b-gray-200 py-2 px-3 hover:bg-orange-500 cursor-pointer"
                >
                  <Trans i18nKey="description.nav3" />
                </li>
              ) : (
                <Link to={"/Login"}>
                  <li className="py-2 px-3 hover:bg-orange-500 cursor-pointer">
                    <Trans i18nKey="description.started3" />
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          !nav
            ? " fixed left-0 top-0 bg-white w-full lg:w-[500px] border-r h-full border-r-gray-200 text-xl font-semibold translate-x-[-100%] duration-500 z-10"
            : "fixed left-0 top-0 bg-white w-full h-full lg:w-[500px] border-r border-r-gray-200 text-xl font-semibold duration-500 ease-in-out z-30"
        }
      >
        <div>
          <div className="flex justify-between py-7 items-center">
            <h1 className="px-4 cursor-default text-3xl font-bold">RECIPO</h1>
            <TfiClose
              size={20}
              className="mx-4 cursor-pointer active:scale-[0.8] duration-150"
              onClick={OpenClose}
            />
          </div>
          <ul className="border-t border-t-gray-200">
            <Link to="/" onClick={Close}>
              <li className="p-4 hover:bg-orange-500 drop-shadow-md active:duration-75 hover:shadow-lg duration-75 hover:text-white active:bg-orange-700">
                <Trans i18nKey="description.nav4" />
              </li>
            </Link>
            {isLoggedIn && (
              <Link to="/Dashboard" onClick={Close}>
                <li className="p-4 hover:bg-orange-500 drop-shadow-md active:duration-75 hover:shadow-lg duration-75 hover:text-white active:bg-orange-700">
                  <Trans i18nKey="description.nav5" />
                </li>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/Subscriptions" onClick={Close}>
                <li className="p-4 text-emerald-500 drop-shadow-md active:duration-75 hover:shadow-lg duration-75 hover:bg-emerald-500 hover:text-white active:bg-emerald-700 flex">
                  <IoMdStar className="mr-1 mt-1" />
                  <Trans i18nKey="description.nav6" />{" "}
                </li>
              </Link>
            )}
            <Link to="/Contact" onClick={Close}>
              <li className="p-4 hover:bg-orange-500 drop-shadow-md hover:shadow-lg duration-75 active:duration-75 hover:text-white active:bg-orange-700">
                <Trans i18nKey="description.nav7" />
              </li>
            </Link>
            <Link to="/About" onClick={Close}>
              <li className="p-4 hover:bg-orange-500 drop-shadow-md active:duration-75 hover:shadow-lg duration-75 hover:text-white active:bg-orange-700">
                <Trans i18nKey="description.footer5" />
              </li>
            </Link>
            {isLoggedIn ? (
              <Link to="" onMouseUp={Close} onClick={HandleLogout}>
                <li className="p-4 hover:bg-orange-500 drop-shadow-md active:duration-75 hover:shadow-lg duration-75 hover:text-white active:bg-orange-700 lg:hidden">
                  <Trans i18nKey="description.nav3" />
                </li>
              </Link>
            ) : (
              <Link to="/Login" onClick={Close}>
                <li className="p-4 hover:bg-orange-500 drop-shadow-md active:duration-75 hover:shadow-lg duration-75 hover:text-white active:bg-orange-700 lg:hidden">
                  <Trans i18nKey="description.started3" />
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
