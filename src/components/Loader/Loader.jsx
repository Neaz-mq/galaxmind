// Loader.jsx
import { useEffect } from "react";
import "./Loader.css";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="loader-bg">
      <div className="planet"></div>
    </div>
  );
}
