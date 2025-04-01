// import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "motion/react";
import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Navbar } from "../../components/navbar";
import "./index.css";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

interface LoadingScreenProps {
  open: boolean;
  delay?: number;
}
const LoadingScreen = ({ open, delay }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="loading-screen"
          className="fixed top-0 left-0 w-full h-full bg-gray-500"
          exit={{
            opacity: 0,
            transition: {
              delay: 0,
            },
          }}
        >
          loading
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const App = () => {
  const [sceneLoading, setSceneLoading] = useState(true);

  return (
    <>
      <LoadingScreen open={sceneLoading} />

      <Navbar />

      <Spline
      className="w-full !h-dvh"
        scene="https://prod.spline.design/XggnjwQsUZKQllzm/scene.splinecode"
        onLoad={() => {
          console.log("ezdzed");
          setSceneLoading(false);
        }}
        onScroll={(event) => {
          console.log(event);
        }}
      />

      <div className="w-full h-32 bg-red-400">hello world</div>
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
