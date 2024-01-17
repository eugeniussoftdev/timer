"use client"
import React, { useEffect, useState } from "react";

import { auth } from "@/config/firebase";
import { useGetUserData } from "@/hooks/firestore";


export const Table = () => {
  const { data } = useGetUserData(auth.currentUser?.uid);
  const [tableKeys, setTableKeys] = useState<string[]>([]);

  useEffect(() => {
    if (data?.length && !tableKeys.length) {
      const keys = Object.keys(data?.length && data[0]) || [];
      if (Array.isArray(keys)) {
        setTableKeys(keys);
      }
    }
  }, [data?.length, tableKeys]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Start Time
            </th>
            <th scope="col" className="px-6 py-3">
              End Time
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Tag
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">
                  {(() => {
                    const date = item?.startTime.toDate();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const seconds = date.getSeconds();
                    return `${hours} : ${minutes} : ${seconds}`;
                  })()}
                </td>
                <td className="px-6 py-4">
                  {(() => {
                    const date = item?.endTime.toDate();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const seconds = date.getSeconds();
                    return `${hours} : ${minutes} : ${seconds}`;
                  })()}
                </td>
                <td className="px-6 py-4">{item?.category}</td>
                <td className="px-6 py-4">
                    {item.tag}
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
