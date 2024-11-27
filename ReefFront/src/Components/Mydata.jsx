import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import API from '../helper/API';

export default function Mydata() {
  const { email, token } = useSelector((state) => state.auth_token);
  const [dataList, setDataList] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API(`auth/data-entries/${email}/`), {
          headers: {
            'Content-Type': 'application/json',
            'Referrer-Policy': 'same-origin',
            'Cross-Origin-Opener-Policy': 'same-origin',
            Authorization: `Token ${token}`,
          },
        });

        setDataList(response.data); // Update state with the API response
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors
      }
    };

    if (email && token) fetchData(); // Ensure email and token are defined before API call
  }, [email, token]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Data Entries</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">ID</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Location</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Owner</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Uploaded At</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">CSV</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Videos</th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300">{item.id}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{item.location}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{item.owner}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{item.uploaded_at}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <a
                      href={item.csv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      CSV Link
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <a
                      href={item.videos}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Video Link
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 px-4 text-center text-gray-500 border-b border-gray-300"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
