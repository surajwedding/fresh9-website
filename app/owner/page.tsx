"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

export default function OwnerPage() {
  const [pin, setPin] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [dashboardData, setDashboardData] =
  useState<any>(null);

const [searchTerm, setSearchTerm] =
  useState("");
const [showAddCustomer, setShowAddCustomer] =
  useState(false);
const [newCustomer, setNewCustomer] =
  useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    area: "",
    plan: "",
    startDate: "",
    deliveryNotes: "",
    specialNotes: "",
  });

const [savingCustomer, setSavingCustomer] =
  useState(false);

const [customerSuccess, setCustomerSuccess] =
  useState("");

const [customerError, setCustomerError] =
  useState("");
  const pinInputRef =
  useRef<HTMLInputElement>(null);
  const correctPin = "786614";

  const API_URL =
    "https://script.google.com/macros/s/AKfycbw-PtFt3qW36FokhDYxGMqJSWEoRlZQxKsOvPh6vJtZuAsSkB1d3gnWGU3F4tZmCm-b/exec";

  
  const fetchDashboardData = async () => {
  try {
  setLoading(true);

  const response =
    await fetch(API_URL);

  const data =
    await response.json();

  setDashboardData(data);

} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}
};

const saveCustomer = async () => {
  
  if (
    !newCustomer.name ||
    !newCustomer.phone ||
    !newCustomer.address ||
    !newCustomer.area ||
    !newCustomer.plan ||
    !newCustomer.startDate
  ) {
    setCustomerError(
      "⚠️ Please fill required fields"
    );
    return;
  }

  try {
    
    setSavingCustomer(true);
    setCustomerError("");

    
    const response =
  await fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(
      newCustomer
    ),
  });

  
      const result = {
  success: true,
};

    console.log(result);

    setCustomerSuccess(
      "✅ Customer Added Successfully"
    );

    setNewCustomer({
      name: "",
      phone: "",
      address: "",
      landmark: "",
      area: "",
      plan: "",
      startDate: "",
      deliveryNotes: "",
      specialNotes: "",
    });

    setTimeout(() => {
      setShowAddCustomer(false);
      setCustomerSuccess("");
      fetchDashboardData();
    }, 1200);

  } catch (error) {
    console.error(error);

    setCustomerError(
      "❌ Failed to save customer"
    );

  } finally {
    setSavingCustomer(false);
  }
};
  
  
    
  useEffect(() => {
    if (accessGranted) {
      fetchDashboardData();
    }
  }, [accessGranted]);
  useEffect(() => {
  if (!accessGranted) {
    pinInputRef.current?.focus();
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
        <div className="bg-white shadow-xl rounded-[32px] p-6 w-full max-w-sm border border-green-100">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-600 mb-2">
              🌿 Fresh 9
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Owner Dashboard
            </p>

            <input
  
  ref={pinInputRef}
  key="pin-input"
  type="password"
  placeholder="Enter 6-digit PIN"
  value={pin}
  onChange={(e) =>
    setPin(e.target.value)
  }
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleAccess();
    }
  }}
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
      <div className="w-full px-2">

        {/* Header */}
<div className="flex items-start justify-between w-full mb-8 pt-1">
  <div>
    <h1 className="text-[42px] font-bold text-green-600">
      🌿 Fresh 9 Dashboard
    </h1>

    <p className="text-lg text-gray-500 mt-2">
      Good Afternoon, Suraj 🌿
    </p>

    <p className="text-gray-400">
      Fresh Before 9
    </p>
  </div>
<div className="flex items-center gap-3"></div>
  <button
    onClick={fetchDashboardData}
    
    className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-[22px] shadow-lg transition-all duration-200 hover:scale-105"
  >
    Refresh ↻
  </button>
  <button
  onClick={() => setShowAddCustomer(true)}
  className="bg-black text-white px-7 py-3 rounded-[22px] shadow-lg transition-all duration-200 hover:scale-105 ml-3"
>
  ➕ Add Customer
</button>
</div>

        {loading ? (
          <p>Loading Dashboard...</p>
        ) : (
          <>
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

              <div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                <p className="text-gray-500">
                  👥 Active Customers
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-3">
                  {dashboardData?.activeCustomers ?? 0}
                </h2>
              </div>

              <div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                <p className="text-gray-500">
                  📦 Today's Deliveries
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-3">
                  {dashboardData?.totalDeliveries ?? 0}
                </h2>
              </div>

              <div className="md:col-span-1 bg-gradient-to-r from-emerald-500 via-green-500 to-green-700 rounded-[36px] shadow-2xl border border-white/10 p-6 text-white">
  <p className="text-green-100 text-lg">
    🥤 Today's Menu
  </p>

  <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
    {dashboardData?.todayMenu ?? "-"}
  </h2>

  <p className="mt-4 text-green-100">
    Fresh Before 9 🌿
  </p>
</div>

                

              <div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                <p className="text-gray-500">
                  ⚠️ Renewals Due
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-3">
                  {dashboardData?.renewalsDue ??
                    0}
                </h2>
              </div>
            </div>
            {/* Bottom Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">

              {/* Today's Prep */}
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
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
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
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
<div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 mt-5">
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
              <div className="bg-white rounded-[30px] shadow-md  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
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
        {/* Customer Search */}
<div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 mb-16 mt-10">
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

    {searchTerm &&
dashboardData?.customerData
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
{showAddCustomer && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-5">

    <div className="bg-white rounded-[32px] shadow-2xl p-8 w-full max-w-2xl">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-600">
          ➕ Add Customer
        </h2>

        <button
          onClick={() =>
            setShowAddCustomer(false)
          }
          className="text-gray-500 text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
  placeholder="Customer Name"
  value={newCustomer.name}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      name: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4"
/>
        

        <input
  placeholder="Phone Number"
  value={newCustomer.phone}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      phone: e.target.value.replace(/\D/g, ""),
    })
  }
  className="border rounded-2xl px-5 py-4"
/>
        

        <input
  placeholder="Address"
  value={newCustomer.address}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      address: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4 md:col-span-2"
/>
        

        <input
  placeholder="Landmark"
  value={newCustomer.landmark}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      landmark: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4"
/>
        

        <input
  placeholder="Area"
  value={newCustomer.area}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      area: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4"
/>

        <select
  value={newCustomer.plan}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      plan: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4"
>
  <option value="">
    Select Plan
  </option>

  <option value="15 Day Plan">
    15 Day Plan
  </option>

  <option value="30 Day Plan">
    30 Day Plan
  </option>

  <option value="Trial Plan">
    Trial Plan
  </option>

  <option value="Custom">
    Custom
  </option>
</select>

        <input
  type="date"
  value={newCustomer.startDate}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      startDate: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4"
/>

        <input
  placeholder="Delivery Notes"
  value={newCustomer.deliveryNotes}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      deliveryNotes: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4"
/>

        <textarea
  placeholder="Special Notes"
  value={newCustomer.specialNotes}
  onChange={(e) =>
    setNewCustomer({
      ...newCustomer,
      specialNotes: e.target.value,
    })
  }
  className="border rounded-2xl px-5 py-4 md:col-span-2"
></textarea>
      </div>
{customerSuccess && (
  <div className="mt-4 bg-green-100 text-green-700 px-4 py-3 rounded-2xl text-center font-semibold">
    {customerSuccess}
  </div>
)}

{customerError && (
  <div className="mt-4 bg-red-100 text-red-700 px-4 py-3 rounded-2xl text-center font-semibold">
    {customerError}
  </div>
)}
      <button
  type="button"
  onClick={() => {
  
    saveCustomer();
  }}
  disabled={savingCustomer}
  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg cursor-pointer"
>
  {savingCustomer
    ? "Saving..."
    : "Save Customer"}
</button>

    </div>
  </div>
)}

      </div>
    </div>
  );
}