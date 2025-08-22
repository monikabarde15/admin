// Users.js
import React from "react";

const dummyUsers = [
  { id: 1, name: "Rahul", email: "rahul@example.com" },
  { id: 2, name: "Neha", email: "neha@example.com" },
  { id: 3, name: "Amit", email: "amit@example.com" },
];
export default function Users() {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
