import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("home"); // Track active section
  const [affiliateName, setAffiliateName] = useState("");
  const [commissionPercentage, setCommissionPercentage] = useState<number | "">("");
  const [affiliateLinks, setAffiliateLinks] = useState<
    { name: string; link: string; commission: number }[]
  >([]);
  const [revenueData, setRevenueData] = useState<{ totalRevenue: number; affiliateEarnings: number }>({
    totalRevenue: 12000, // Mock total revenue
    affiliateEarnings: 3000, // Mock affiliate earnings
  });
  const [affiliateEarnings, setAffiliateEarnings] = useState<
    { name: string; link: string; earnings: number; commission: number }[]
  >([
    // Mock affiliate earnings data
    { name: "Affiliate A", link: "http://localhost:5173/?ref=affiliateA", earnings: 1200, commission: 10 },
    { name: "Affiliate B", link: "http://localhost:5173/?ref=affiliateB", earnings: 800, commission: 15 },
    { name: "Affiliate C", link: "http://localhost:5173/?ref=affiliateC", earnings: 1000, commission: 12 },
  ]);

  const navigate = useNavigate();

  // Simulate fetching revenue data on component mount
  useEffect(() => {
    fetchRevenueData();
    fetchAffiliateEarnings();
  }, []);

  const handleCreateAffiliateLink = () => {
    if (!affiliateName || commissionPercentage === "" || commissionPercentage <= 0) {
      alert("Please enter valid affiliate details and commission percentage.");
      return;
    }

    const newLink = {
      name: affiliateName,
      link: `http://localhost:5173/?ref=${affiliateName}`,
      commission: commissionPercentage,
    };

    setAffiliateLinks([...affiliateLinks, newLink]);
    setAffiliateName("");
    setCommissionPercentage("");
  };

  const handleDeleteAffiliateLink = (index: number) => {
    const updatedLinks = affiliateLinks.filter((_, i) => i !== index);
    setAffiliateLinks(updatedLinks);
  };

  const fetchRevenueData = async () => {
    // Simulate fetching revenue data from an API
    try {
      const response = await fetch("http://localhost:3001/api/revenue");
      const data = await response.json();
      setRevenueData(data);
    } catch (error) {
      console.error("Error fetching revenue data:", error);
    }
  };

  const fetchAffiliateEarnings = async () => {
    // Simulate fetching affiliate earnings data from an API
    try {
      const response = await fetch("http://localhost:3001/api/affiliate-earnings");
      const data = await response.json();
      setAffiliateEarnings(data);
    } catch (error) {
      console.error("Error fetching affiliate earnings:", error);
    }
  };

  // Data for the pie chart
  const chartData = {
    labels: ["Total Revenue", "Affiliate Earnings"],
    datasets: [
      {
        label: "Revenue Breakdown",
        data: [revenueData.totalRevenue, revenueData.affiliateEarnings],
        backgroundColor: ["rgba(128, 0, 128, 0.6)", "rgba(75, 0, 130, 0.6)"],
        borderColor: ["rgba(128, 0, 128, 1)", "rgba(75, 0, 130, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Revenue Breakdown",
      },
    },
  };

  return (
    <div className="dashboard-container">
      <style>
        {`
          /* Global Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: "Inter", sans-serif;
            background-color: #0a0a0a;
            color: #fff;
          }

          .dashboard-container {
            display: flex;
            min-height: 100vh;
          }

          /* Slim Sidebar */
          .sidebar {
            width: 180px; /* Updated width */
            background: rgba(10, 10, 10, 0.9);
            padding: 20px 10px;
            border-right: 1px solid rgba(128, 0, 128, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 1000;
          }

          .sidebar h2 {
            font-size: 1.2em;
            margin-bottom: 30px;
            color: #fff;
            text-align: center;
            text-shadow: 0 0 20px rgba(128, 0, 128, 0.3);
          }

          .sidebar ul {
            list-style: none;
            padding: 0;
            width: 100%;
          }

          .sidebar ul li {
            margin-bottom: 20px;
            text-align: center;
          }

          .sidebar ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 1em;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .sidebar ul li a:hover {
            color: #800080;
          }

          .sidebar ul li a i {
            font-size: 1.5em;
            margin-bottom: 5px;
          }

          /* Main Content */
          .main-content {
            flex: 1;
            padding: 40px;
            background: rgba(10, 10, 10, 0.8);
            margin-left: 180px; /* Updated to match the sidebar width */
          }

          h1 {
            font-size: 2.5em;
            margin-bottom: 30px;
            color: #fff;
            text-align: center;
            text-shadow: 0 0 20px rgba(128, 0, 128, 0.3);
          }

          h2 {
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #fff;
            text-shadow: 0 0 10px rgba(128, 0, 128, 0.3);
          }

          /* Cards */
          .card {
            background: rgba(10, 10, 10, 0.6);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid rgba(128, 0, 128, 0.3);
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.2);
            transition: all 0.3s ease;
            margin-bottom: 20px;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 30px rgba(128, 0, 128, 0.4);
          }

          /* Summary Grid */
          .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
          }

          .summary-card {
            background: rgba(128, 0, 128, 0.1);
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
          }

          .summary-card:hover {
            transform: scale(1.05);
            background: rgba(128, 0, 128, 0.2);
          }

          .summary-card h3 {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #fff;
          }

          .summary-card p {
            font-size: 1.2em;
            color: #aaa;
          }

          /* Analytics Section */
          .analytics-explanation {
            margin-top: 20px;
            font-size: 1.1em;
            color: #aaa;
            line-height: 1.6;
          }

          .analytics-explanation strong {
            color: #800080;
          }

          /* Input Fields */
          .input-field {
            width: 100%;
            padding: 15px;
            margin-bottom: 15px;
            background: rgba(10, 10, 10, 0.8);
            border: 1px solid rgba(128, 0, 128, 0.3);
            border-radius: 8px;
            color: #fff;
            font-size: 1em;
            transition: all 0.3s ease;
          }

          .input-field:focus {
            border-color: rgba(128, 0, 128, 0.8);
            box-shadow: 0 0 10px rgba(128, 0, 128, 0.4);
          }

          /* Buttons */
          .glow-button {
            background: rgba(128, 0, 128, 0.8);
            color: #fff;
            border: none;
            padding: 15px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.2);
          }

          .glow-button:hover {
            background: rgba(128, 0, 128, 1);
            box-shadow: 0 0 30px rgba(128, 0, 128, 0.4);
          }

          /* Table Styles */
          .affiliates-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          .affiliates-table th,
          .affiliates-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid rgba(128, 0, 128, 0.3);
          }

          .affiliates-table th {
            background: rgba(128, 0, 128, 0.1);
            color: #fff;
          }

          .affiliates-table td {
            color: #aaa;
          }

          .affiliates-table tr:hover {
            background: rgba(128, 0, 128, 0.05);
          }

          .delete-button {
            background: rgba(255, 0, 0, 0.8);
            color: #fff;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            transition: all 0.3s ease;
          }

          .delete-button:hover {
            background: rgba(255, 0, 0, 1);
          }

          .commission-input {
            width: 60px;
            padding: 5px;
            background: rgba(10, 10, 10, 0.8);
            border: 1px solid rgba(128, 0, 128, 0.3);
            border-radius: 5px;
            color: #fff;
            text-align: center;
          }

          .commission-input:focus {
            border-color: rgba(128, 0, 128, 0.8);
            box-shadow: 0 0 10px rgba(128, 0, 128, 0.4);
          }
        `}
      </style>

      {/* Slim Sidebar */}
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li>
            <a href="#home" onClick={() => setActiveSection("home")}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#analytics" onClick={() => setActiveSection("analytics")}>
              <i className="fas fa-chart-line"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#affiliates" onClick={() => setActiveSection("affiliates")}>
              <i className="fas fa-users"></i>
              <span>Affiliates</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === "home" && (
          <>
            <h1>Dashboard Overview</h1>
            <div className="summary-grid">
              <div className="summary-card">
                <h3>Total Revenue</h3>
                <p>${revenueData.totalRevenue.toFixed(2)}</p>
              </div>
              <div className="summary-card">
                <h3>Affiliate Earnings</h3>
                <p>${revenueData.affiliateEarnings.toFixed(2)}</p>
              </div>
              <div className="summary-card">
                <h3>Active Affiliates</h3>
                <p>{affiliateEarnings.length}</p>
              </div>
              <div className="summary-card">
                <h3>New Signups</h3>
                <p>+12</p>
              </div>
            </div>
          </>
        )}

        {activeSection === "analytics" && (
          <>
            <h1>Analytics</h1>
            <div className="card">
              <h2>Revenue Breakdown</h2>
              <Pie data={chartData} options={chartOptions} />
            </div>
          </>
        )}

        {activeSection === "affiliates" && (
          <>
            <h1>Affiliates</h1>
            <div className="card">
              <h2>Create Affiliate Link</h2>
              <input
                type="text"
                placeholder="Affiliate Name"
                className="input-field"
                value={affiliateName}
                onChange={(e) => setAffiliateName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Commission Percentage"
                className="input-field"
                value={commissionPercentage}
                onChange={(e) => setCommissionPercentage(Number(e.target.value))}
              />
              <button onClick={handleCreateAffiliateLink} className="glow-button">
                Create Link
              </button>
            </div>

            {/* Affiliates Table */}
            <div className="card">
              <h2>Affiliate Links</h2>
              <table className="affiliates-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Commission (%)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {affiliateLinks.map((link, index) => (
                    <tr key={index}>
                      <td>{link.name}</td>
                      <td>
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                          {link.link}
                        </a>
                      </td>
                      <td>{link.commission}%</td>
                      <td>
                        <button
                          onClick={() => handleDeleteAffiliateLink(index)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;