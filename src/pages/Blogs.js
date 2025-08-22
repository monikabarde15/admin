import React from "react";
const dummyBlogs = [
  { id: 1, title: "React Basics", author: "Rahul" },
  { id: 2, title: "Node.js Guide", author: "Neha" },
  { id: 3, title: "Laravel Tips", author: "Amit" },
];
export default function Blogs() {
  return (
     <div>
      <h2 className="text-2xl font-bold mb-4">Blogs List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
          </tr>
        </thead>
        <tbody>
          {dummyBlogs.map((blog) => (
            <tr key={blog.id} className="hover:bg-gray-100">
              <td className="p-2 border">{blog.id}</td>
              <td className="p-2 border">{blog.title}</td>
              <td className="p-2 border">{blog.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
