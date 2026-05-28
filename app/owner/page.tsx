"use client";

import { useEffect, useState } from "react";

export default function OwnerPage() {
  const [pin, setPin] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [dashboardData, setDashboardData] =
    useState<any>(null);
    const [searchTerm, setSearchTerm] =
  useState("");

  const correctPin = "786614";

  const API_URL =
    "https://script.google.com/macros/s/AKfycbw-PtFt3qW36FokhDYxGMqJSWEoRlZQxKsOvPh6vJtZuAsSkB1d3gnWGU3F4tZmCm-b/exec";

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      const data = await response.json();

      setDashboardData(data);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessGranted) {
      fetchDashboardData();
    }
  }, [accessGranted]);

  const handleAccess = () => {
    if (pin === correctPin) {
      setAccessGranted(true);
      setError("");
    } else {
      setError("Incorrect PIN");
    }
  };

  // PIN SCREEN
  if (!accessGranted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-5">
        <div className="bg-white shadow-xl rounded-[32px] p-8 w-full max-w-sm border border-green-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-2">
              🌿 Fresh 9
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Owner Dashboard
            </p>

            <input
              type="password"
              placeholder="Enter 6-digit PIN"
              value={pin}
              onChange={(e) =>
                setPin(e.target.value)
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-center text-xl outline-none focus:ring-2 focus:ring-green-500"
              maxLength={6}
            />

            {error && (
              <p className="text-red-500 mt-3 text-sm">
                {error}
              </p>
            )}

            <button
              onClick={handleAccess}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-2xl font-semibold text-lg shadow-md"
            >
              Access Dashboard
            </button>

            <p className="mt-6 text-sm text-gray-400">
              Fresh Before 9 🌿
            </p>
          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-[#f8faf8] p-5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* Header */}
<div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
  <div>
    <h1 className="text-4xl font-bold text-green-600">
      🌿 Fresh 9 Dashboard
    </h1>

    <p className="text-lg text-gray-500 mt-2">
      Good Afternoon, Suraj 🌿
    </p>

    <p className="text-gray-400">
      Fresh Before 9
    </p>
  </div>

  <button
    onClick={fetchDashboardData}
    className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-700 transition w-fit"
  >
    Refresh ↻
  </button>
</div>

          
        </div>

        {loading ? (
          <p>Loading Dashboard...</p>
        ) : (
          <>
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

              <div className="bg-white rounded-[30px] shadow-md p-6">
                <p className="text-gray-500">
                  👥 Active Customers
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-3">
                  {dashboardData?.activeCustomers ?? 0}
                </h2>
              </div>

              <div className="bg-white rounded-[30px] shadow-md p-6">
                <p className="text-gray-500">
                  📦 Today's Deliveries
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-3">
                  {dashboardData?.totalDeliveries ?? 0}
                </h2>
              </div>

              <div className="bg-white rounded-[30px] shadow-md p-6">
                <p className="text-gray-500">
                  🥤 Today's Menu
                </p>

                <h2 className="text-2xl font-bold mt-3">
                  {dashboardData?.todayMenu ??
                    "-"}
                </h2>
              </div>

              <div className="bg-white rounded-[30px] shadow-md p-6">
                <p className="text-gray-500">
                  ⚠️ Renewals Due
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-3">
                  {dashboardData?.renewalsDue ??
                    0}
                </h2>
              </div>
            </div>
{/* Customer Search */}
<div className="bg-white rounded-[30px] shadow-md p-6 mb-8">
  <h2 className="text-2xl font-bold text-green-600 mb-5">
    🔍 Search Customer
  </h2>

  <input
    type="text"
    placeholder="Search by name or phone..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500"
  />

  <div className="mt-5 space-y-4">

    {dashboardData?.customerData
      ?.filter((customer: any) =>
        customer.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        customer.phone
          ?.toString()
          .includes(searchTerm)
      )
      .slice(0, 5)
      .map(
        (
          customer: any,
          index: number
        ) => (
          <div
            key={index}
            className="bg-green-50 rounded-3xl p-5"
          >
            <h3 className="text-xl font-bold">
              {customer.name}
            </h3>

            <p className="text-gray-600 mt-2">
              📞 {customer.phone}
            </p>

            <p>
              📍 {customer.area}
            </p>

            <p>
              🥤 {customer.plan}
            </p>

            <p>
              ⏳{" "}
              {customer.daysRemaining} Days
              Left
            </p>

            <p>
              💰{" "}
              {customer.paymentStatus}
            </p>

            {customer.notes && (
              <p className="mt-2 text-sm text-gray-600">
                📝 {customer.notes}
              </p>
            )}
          </div>
        )
      )}
  </div>
</div>
            {/* Bottom Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">

              {/* Today's Prep */}
              <div className="bg-white rounded-[30px] shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-5">
                  🌿 Today's Prep
                </h2>

                {dashboardData?.production?.map(
                  (
                    item: any,
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b py-4"
                    >
                      <span className="text-lg text-gray-700">
                        {item.item}
                      </span>

                      <span className="text-2xl font-bold text-green-600">
                        {item.quantity}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Delivery By Area */}
              <div className="bg-white rounded-[30px] shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-5">
                  🚚 Delivery By Area
                </h2>

                {dashboardData?.areaCounts &&
                  Object.entries(
                    dashboardData.areaCounts
                  ).map(
                    (
                      [area, count]: any
                    ) => (
                      <div
                        key={area}
                        className="flex justify-between items-center border-b py-4"
                      >
                        <span className="text-lg text-gray-700">
                          {area}
                        </span>

                        <span className="text-2xl font-bold text-green-600">
                          {count}
                        </span>
                      </div>
                    )
                  )}
              </div>

              {/* Pending Payments */}
              {/* Special Notes */}
<div className="bg-white rounded-[30px] shadow-md p-6 mt-5">
  <h2 className="text-2xl font-bold text-green-600 mb-5">
    📝 Special Notes
  </h2>

  {dashboardData?.specialNotes?.length >
  0 ? (
    dashboardData.specialNotes.map(
      (
        item: any,
        index: number
      ) => (
        <div
          key={index}
          className="bg-green-50 rounded-2xl p-4 mb-3"
        >
          <p className="font-semibold">
            {item.customer}
          </p>

          <p className="text-gray-600">
            {item.note}
          </p>
        </div>
      )
    )
  ) : (
    <p className="text-gray-500">
      No Special Notes 🌿
    </p>
  )}
</div>
              <div className="bg-white rounded-[30px] shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-5">
                  💰 Pending Payments
                </h2>

                {dashboardData
                  ?.pendingCustomerNames
                  ?.length > 0 ? (
                  dashboardData.pendingCustomerNames.map(
                    (
                      customer: string,
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="bg-yellow-50 rounded-2xl p-4 mb-3"
                      >
                        {customer}
                      </div>
                    )
                  )
                ) : (
                  <p className="text-gray-500">
                    No Pending Payments 🎉
                  </p>
                )}
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}