import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import PastRecordings from "./pages/PastRecordings.jsx";
import Stats from "./pages/Stats.jsx";
import Settings from "./pages/Settings.jsx";
import Upgrade from "./pages/Upgrade.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  const [recordings, setRecordings] = useState(() => {
    const storedRecordings = localStorage.getItem("recordings");
    return storedRecordings ? JSON.parse(storedRecordings) : [];
  });

  useEffect(() => {
    localStorage.setItem("recordings", JSON.stringify(recordings));
  }, [recordings]);

  return (
    <Box bg="brand.50" minHeight="100vh">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index recordings={recordings} setRecordings={setRecordings} />} />
          <Route path="/past-recordings" element={<PastRecordings recordings={recordings} />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/upgrade" element={<Upgrade />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
