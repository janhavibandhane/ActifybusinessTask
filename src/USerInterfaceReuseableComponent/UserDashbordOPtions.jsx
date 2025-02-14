import { CgProfile } from "react-icons/cg"; 

function UserDashboardOption() {
  return (
    <>
      <ul>
        <li className="">
          <div className="flex items-center justify-between">
            <span className="flex">
              <CgProfile className="mt-[0.3rem] mr-2" /> Account
            </span>
            <svg
              className="w-4 h-4 rotate-180 transition-transform" // Always rotated down
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

          {/* Dropdown Items (Always Visible) */}
          <ul className="pl-6 bg-base-300 rounded-xl p-3">
            <li className="bg-gray-300 rounded-lg">
              <a>Accounts</a>
            </li>
            <li>
              <a>Account Report</a>
            </li>
            <li>
              <a>Account Upload</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default UserDashboardOption;
