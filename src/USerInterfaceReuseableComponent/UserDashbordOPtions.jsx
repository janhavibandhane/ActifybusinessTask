import { useState } from "react";
import { CgProfile } from "react-icons/cg"; 

function UserDashboardOPtion(){
      const [isProfileOpen, setIsProfileOpen] = useState(false);
    return(
        <>
        <ul>
        <li className="">
                        <div
                          className="flex items-center justify-between"
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                          <span className=" flex">
                            <CgProfile className=" mt-[0.3rem] mr-2"/> Account
                          </span>
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              isProfileOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                        {/* Dropdown Items */}
                        {isProfileOpen && (
                          <ul className="pl-6 bg-base-300 rounded-xl p-3">
                            <li>
                              <a>Accounts</a>
                            </li>
                            <li>
                              <a>Account Report</a>
                            </li>
                            <li>
                              <a>Account Upload</a>
                            </li>
                          </ul>
                        )}
                      </li>
        </ul>
        </>
    )
}
export default UserDashboardOPtion;