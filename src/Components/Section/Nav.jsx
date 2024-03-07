import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="px-5 text-2xl py-5 fixed z-50 left-0 top-0 right-0  bg-white">
      <div className="navbar flex items-center justify-between ">
        <div className="navbar-start flex items-center">
          <div className="dropdown flex gap-24 md:gap-80">
            <div className="flex">
              {/* <img src={logo} className="h-16 lg:h-20 mr-2" /> */}
              
              <div className="flex gap-2 md:flex md:gap-2 pt-5">
                <h1 className="text-3xl lg:text-4xl text-yellow-400 font-bold">
                  Air
                </h1>
                <h1 className="text-3xl lg:text-4xl text-blue-500 ">
                  Book
                </h1>
              </div>
            </div>

            <div className="mt-4">
              <label tabIndex={0} className="btn btn-ghost lg:hidden md:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black "
              >
                {/* <NavLink to="/">Home</NavLink> */}
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/offer">offer</NavLink>
                <NavLink to="/airlines">Airlines</NavLink>
                <NavLink to="/about">About</NavLink>
                <button className="btn btn-xs btn-primary">Sign in</button>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <div className="flex gap-7 text-black text-3xl  pt-8">
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/offer">offer</NavLink>
                <NavLink to="/airlines">Airlines</NavLink>
                <NavLink to="/about">About</NavLink>
              
                <label className="swap swap-rotate mx-1">
                    <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                </label>

            </div>
          </ul>
        </div>

        <div className="navbar-end pt-10 hidden lg:flex ">
            <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
