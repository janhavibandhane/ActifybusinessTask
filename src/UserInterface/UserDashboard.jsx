import { AiFillAppstore } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiInbox2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import UserDashboardOPtion from "../USerInterfaceReuseableComponent/UserDashbordOPtions";

function UserDashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen">
        {/* Drawer Wrapper */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          {/* Main Content  */}
          <div className="drawer-content flex flex-col flex-1 p-6 bg-gray-100">
            {/* Mobile Drawer Button */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button lg:hidden mb-4"
            >
              ☰ Open Drawer
            </label>

            {/* Profile Form */}
          </div>

          {/* Sidebar Drawer */}
          <div className="drawer-side mr-4">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-80 min-h-full bg-base-100 p-4 text-lg font-semibold space-y-4">
              <li>
                <AiFillAppstore /> Dashboard
              </li>
              <UserDashboardOPtion />
              <UserDashboardOPtion />
              <UserDashboardOPtion />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;