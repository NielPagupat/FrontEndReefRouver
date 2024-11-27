import axios from 'axios';
import React, { useState, useEffect } from 'react';
import API from '../helper/API';
import { useSelector } from 'react-redux';

export default function RentRouv() {
  const { email, token } = useSelector((state) => state.auth_token);
  const [dataList, setDataList] = useState([]);
  const [request, setRequest] = useState({
    requestee: email,
    device: '',
    dateRequested: '',
    dateTobeUsed: '',
    accessDuration: 0,
  });

  const handleSetRequest = (key, value) => {
    setRequest((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submitRequest = async () => {
    try {
      await axios.post(API('auth/device-request-access/'), request, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      alert('Request submitted successfully!');
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit request.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API(`auth/user/device-request-access/`), {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });
        setDataList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (email && token) fetchData();
  }, [email, token]);

  const approvedRequests = dataList.filter((item) => item.requestStatus === true);
  const pendingRequests = dataList.filter((item) => item.requestStatus === false);

  return (
    <div className="flex flex-col lg:flex-row p-4 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Request Form */}
      <div className="bg-white shadow-md p-6 rounded-lg w-full lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Request Access</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Choose Device</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md w-full p-2"
            placeholder="Device ID"
            onChange={(e) => handleSetRequest('device', e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date Requested</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md w-full p-2"
            onChange={(e) => handleSetRequest('dateRequested', e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date to be Used</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md w-full p-2"
            onChange={(e) => handleSetRequest('dateTobeUsed', e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Access Duration (hours)</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md w-full p-2"
            onChange={(e) => handleSetRequest('accessDuration', e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={submitRequest}
        >
          Submit
        </button>
      </div>

      {/* Requests Display */}
      <div className="flex-1 space-y-8">
        {/* Pending Requests Table */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Pending Requests</h2>
          <div className="overflow-auto max-h-96">
            {pendingRequests.length > 0 ? (
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-2">Device ID</th>
                    <th className="border border-gray-200 p-2">Date Requested</th>
                    <th className="border border-gray-200 p-2">Date to be Used</th>
                    <th className="border border-gray-200 p-2">Duration (hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-yellow-50">
                      <td className="border border-gray-200 p-2">{request.device}</td>
                      <td className="border border-gray-200 p-2">{request.dateRequested}</td>
                      <td className="border border-gray-200 p-2">{request.dateTobeUsed}</td>
                      <td className="border border-gray-200 p-2">{request.accessDuration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No pending requests.</p>
            )}
          </div>
        </div>

        {/* Approved Requests Table */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Approved Requests</h2>
          <div className="overflow-auto max-h-96">
            {approvedRequests.length > 0 ? (
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-2">Device ID</th>
                    <th className="border border-gray-200 p-2">Date Requested</th>
                    <th className="border border-gray-200 p-2">Date to be Used</th>
                    <th className="border border-gray-200 p-2">Duration (hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-green-50">
                      <td className="border border-gray-200 p-2">{request.device}</td>
                      <td className="border border-gray-200 p-2">{request.dateRequested}</td>
                      <td className="border border-gray-200 p-2">{request.dateTobeUsed}</td>
                      <td className="border border-gray-200 p-2">{request.accessDuration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No approved requests.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
