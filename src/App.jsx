import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";

function App() {
  const location = useLocation();

  return (
    <div
      style={{
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "white",
        minHeight: "100vh",
        padding: "0 20px",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <Navbar />

      {/* ✅ Accent Gradient Line */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
          marginBottom: "20px"
        }}
      ></div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route
            path="/"
            element={
              <PageWrapper>
                <Hero />
              </PageWrapper>
            }
          />

          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />

          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />

          <Route
            path="/projects/:id"
            element={
              <PageWrapper>
                <ProjectDetails />
              </PageWrapper>
            }
          />

          <Route
            path="/skills"
            element={
              <PageWrapper>
                <Skills />
              </PageWrapper>
            }
          />

          <Route
            path="/github"
            element={
              <PageWrapper>
                <GitHubStats />
              </PageWrapper>
            }
          />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default App;