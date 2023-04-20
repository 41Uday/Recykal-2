import React from "react";

import Popup from "reactjs-popup";

import { useState } from "react";

import { RxCross1 } from "react-icons/rx";

const userData = [
  {
    id: 1,
    fullname: "John Smith",
    email: "john.smith@example.com",
    department: "Sales",
    date: "2022-03-15",
    is_enabled: true,
  },
  {
    id: 2,
    fullname: "Jane Doe",
    email: "jane.doe@example.com",
    department: "Marketing",
    date: "2022-03-16",
    is_enabled: false,
  },
  {
    id: 3,
    fullname: "David Brown",
    email: "david.brown@example.com",
    department: "Engineering",
    date: "2022-03-17",
    is_enabled: true,
  },
  {
    id: 4,
    fullname: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Customer Support",
    date: "2022-03-18",
    is_enabled: true,
  },
  {
    id: 5,
    fullname: "Michael Lee",
    email: "michael.lee@example.com",
    department: "Human Resources",
    date: "2022-03-19",
    is_enabled: false,
  },
  {
    id: 6,
    fullname: "Laura Chen",
    email: "laura.chen@example.com",
    department: "Finance",
    date: "2022-03-20",
    is_enabled: true,
  },
  {
    id: 7,
    fullname: "Kevin Wong",
    email: "kevin.wong@example.com",
    department: "Product Management",
    date: "2022-03-21",
    is_enabled: false,
  },
  {
    id: 8,
    fullname: "Emily Kim",
    email: "emily.kim@example.com",
    department: "Operations",
    date: "2022-03-22",
    is_enabled: true,
  },
  {
    id: 9,
    fullname: "Richard Chang",
    email: "richard.chang@example.com",
    department: "IT",
    date: "2022-03-23",
    is_enabled: false,
  },
  {
    id: 10,
    fullname: "Maria Rodriguez",
    email: "maria.rodriguez@example.com",
    department: "Legal",
    date: "2022-03-24",
    is_enabled: true,
  },
];

const UserTab = () => {
  const [isInvite, setIsInvite] = useState(false);

  function inviteButton() {
    setIsInvite(true);
  }

  console.log(isInvite);
  return (
    <div className="">
      <Popup
        modal
        trigger={
          <div className="w-full m-4 md:m-8 md:mt-12">
            <div style={{ marginLeft: 100 }}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right lg:mx-48"
                onClick={inviteButton}
              >
                Invite
              </button>
            </div>

            <div className="w-full overflow-x-auto flex flex-col justify-center items-center md:my-8">
              <table className="divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.map((e) => (
                    <tr key={e.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {e.fullname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {e.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {e.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {e.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {e.is_enabled}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      >
        {(close) => (
          <div className="w-40 ">
            <div className="s-8-video-container-v-1">
              <h1>This is Email</h1>
            </div>
            <RxCross1 className="curser:pointer" onClick={() => close()} />
          </div>
        )}
      </Popup>
    </div>
  );
};

export default UserTab;
