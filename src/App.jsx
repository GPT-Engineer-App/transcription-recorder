import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import PastRecordings from "./pages/PastRecordings.jsx";
import Stats from "./pages/Stats.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Box bg="brand.50" minHeight="100vh">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/past-recordings" element={<PastRecordings />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
