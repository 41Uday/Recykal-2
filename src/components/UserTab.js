import React from "react";

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
  return (
    <div className="w-full m-4 md:m-8  md:mt-12">
      {/* <h1 className="text-left">This is a UserTab</h1> */}
      <div className="w-full overflow-x-auto flex justify-center items-center">
        <table className="divide-y divide-gray-200">
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
  );
};

export default UserTab;
