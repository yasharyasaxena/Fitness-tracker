import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

export default function DashLayout() {
  const Menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/dashboard/analytics" },
    { name: "Heart Rate", path: "/dashboard/heart_rate" },
    { name: "Remarks", path: "/dashboard/remarks" },
  ];
  return (
    <>
      <div className="flex">
        <div className="bg-dark-purple h-85vh sticky top-20 text-gray-300 p-5 pt-4 w-44 ml-5 text-center">
          <ul>
            {Menu.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <li
                    key={index}
                    className="text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2"
                  >
                    <span className="text-2xl block float-left">
                      <MdDashboard />
                    </span>
                    <span className="text-base font-medium flex-1">
                      {item.name}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </>
  );
}
