import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { ShoppingBagIcon, ExclamationCircleIcon, CurrencyDollarIcon } from '@heroicons/react/solid';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const InventoryDashboard: React.FC = () => {
  const [data] = useState({
    totalSales: 12345,
    totalExpense: 3213,
    paymentSent: 65920,
    paymentReceived: 72840,
    salesAndPurchases: {
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      salesTarget: [5000, 6000, 5500, 7000, 6500, 6000],
      sales: [4500, 7000, 6000, 4000, 3500, 5000],
      purchases: [4000, 5000, 4500, 3000, 3500, 5000],
    },
    devices: {
      labels: ['iOS', 'MacBook', 'Smart TV', 'Tesla Model S', 'Google Pixel'],
      data: [40, 30, 12, 8, 10],
    },
    recentInvoices: [
      { id: 'INV9783411', customer: 'Skylar Price', amount: 354, status: 'Delivered' },
      { id: 'INV9783412', customer: 'Julian Jenkins', amount: 910, status: 'In Progress' },
      { id: 'INV9783413', customer: 'Ava Jones', amount: 112, status: 'Returned' },
      { id: 'INV9783414', customer: 'David Wright', amount: 210, status: 'Delivered' },
      { id: 'INV9783415', customer: 'Aaron Dunn', amount: 43, status: 'In Progress' },
    ],
    stockHistory: {
      totalSales: 210,
      totalReturns: 2,
      totalPurchases: 500,
      purchaseReturns: 5,
    },
    stockAlert: [
      { product: 'iPad Pro 2017 Model', quantity: 32 },
      { product: 'DJI Mavic Pro 2', quantity: 43 },
      { product: 'Tesla Model S', quantity: 21 },
      { product: 'Lego StarWar edition', quantity: 12 },
      { product: 'Dell Computer Monitor', quantity: 16 },
      { product: 'Google Pixel', quantity: 8 },
      { product: 'Microsoft Surface', quantity: 14 },
      { product: 'Amazon Kindle', quantity: 27 },
    ],
    payments: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      paymentSent: [1000, 1500, 1200, 1700, 1600, 2000, 1800, 1900, 2100, 2300, 2400, 2500, 2200, 2600, 2800],
      paymentReceived: [1200, 1700, 1300, 1800, 2000, 2300, 2100, 2200, 2400, 2500, 2700, 2900, 3000, 3100, 3300],
    },
  });

  const salesAndPurchasesChart = {
    labels: data.salesAndPurchases.labels,
    datasets: [
      {
        label: 'Sales Target',
        data: data.salesAndPurchases.salesTarget,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: true,
      },
      {
        label: 'Sales',
        data: data.salesAndPurchases.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
      },
      {
        label: 'Purchases',
        data: data.salesAndPurchases.purchases,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: true,
      },
    ],
  };

  const paymentChart = {
    labels: data.payments.labels,
    datasets: [
      {
        label: 'Payment Sent',
        data: data.payments.paymentSent,
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Payment Received',
        data: data.payments.paymentReceived,
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  const devicesPieChart = {
    labels: data.devices.labels,
    datasets: [
      {
        data: data.devices.data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
      },
    ],
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-700">Total Sales</h3>
          <p className="text-xl text-green-600">${data.totalSales}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-700">Total Expense</h3>
          <p className="text-xl text-red-600">${data.totalExpense}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-700">Payment Sent</h3>
          <p className="text-xl text-blue-600">${data.paymentSent}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-700">Payment Received</h3>
          <p className="text-xl text-yellow-600">${data.paymentReceived}</p>
        </div>
      </div>

      {/* Sales & Purchases Chart */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
  <h3 className="text-lg font-bold text-gray-700 mb-4">Sales & Purchases</h3>
  <div className="w-full max-w-md mx-auto">
    <Bar data={salesAndPurchasesChart} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
  </div>
</div>

<div className="flex justify-between mb-8 space-x-8">

  {/* Payments Chart */}
  <div className="bg-white p-4 rounded-lg shadow-lg w-full lg:w-1/2">
    <h3 className="text-lg font-bold text-gray-700 mb-4">Payments (15 Days)</h3>
    <div className="w-full">
      <Line data={paymentChart} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
    </div>
  </div>

  {/* Devices Pie Chart */}
  <div className="bg-white p-4 rounded-lg shadow-lg w-full lg:w-1/2">
    <h3 className="text-lg font-bold text-gray-700 mb-4">Devices</h3>
    <div className="w-full">
      <Pie data={devicesPieChart} height={200} />
    </div>
  </div>
</div>


<div className="flex space-x-8 mb-8">
  {/* Stock History Section */}
  <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
    <h3 className="text-lg font-bold text-gray-700 mb-4">Stock History (7 Days)</h3>
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-sm font-medium">Total Sales Items</span>
        <span className="text-xl text-green-600">210</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Total Sales Return Items</span>
        <span className="text-xl text-red-600">2</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Total Purchase Items</span>
        <span className="text-xl text-blue-600">500</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Purchase Returns Items</span>
        <span className="text-xl text-yellow-600">10</span>
      </div>
    </div>
  </div>

  {/* Stock Alert Section */}
  <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
    <h3 className="text-lg font-bold text-gray-700 mb-4">Stock Alert</h3>
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-sm font-medium">iPad Pro 2017 Model</span>
        <span className="text-xl text-gray-800">32</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">DJI Mavic Pro 2</span>
        <span className="text-xl text-gray-800">43</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Tesla Model S</span>
        <span className="text-xl text-gray-800">21</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Lego StarWar edition</span>
        <span className="text-xl text-gray-800">12</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Dell Computer Monitor</span>
        <span className="text-xl text-gray-800">16</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Google Pixel</span>
        <span className="text-xl text-gray-800">8</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Microsoft Surface</span>
        <span className="text-xl text-gray-800">14</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Amazon Kindle</span>
        <span className="text-xl text-gray-800">27</span>
      </div>
    </div>
  </div>
</div>


      {/* Recent Invoices */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Recent Invoices</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Invoice ID</th>
              <th className="py-2 px-4 text-left">Customer</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.recentInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="py-2 px-4">{invoice.id}</td>
                <td className="py-2 px-4">{invoice.customer}</td>
                <td className="py-2 px-4">${invoice.amount}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-white text-xs rounded-lg ${
                      invoice.status === 'Delivered'
                        ? 'bg-green-600'
                        : invoice.status === 'In Progress'
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryDashboard;
