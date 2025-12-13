"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  interface FormData {
    name: string;
    email: string;
  }

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post<FormData>("/api/users", {
        name,
        email,
      });
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="mt-1 block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            className="mt-1 block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></input>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
