import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CustomCursor from "./components/customCursor/CustomCursor";
import Loader from "./components/loader/Loader";
import AllProjects from "./pages/allProject/AllProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/home/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            className="relative gradient text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <CustomCursor />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
