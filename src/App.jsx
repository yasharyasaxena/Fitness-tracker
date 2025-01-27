import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Layout from "./components/Layout";
import DashLayout from "./components/DashLayout";
import Dashboard from "./pages/Dashboard";
import HeartRate from "./pages/HeartRate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Dashboard" element={<DashLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="heart_rate" element={<HeartRate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
