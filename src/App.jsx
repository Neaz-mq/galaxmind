import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader/Loader";
import Services from "./components/Services";
import Exploration from "./components/Exploration";
import Success from "./components/Success/Success";
import Pluton from "./components/Pluton";
import About from "./components/About";


export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative">         
          <Navbar />
          <main>  
            <Services />   
            <Exploration /> 
            <Success />   
            <Pluton />  
            <About />
          </main>     
        </div>
      )}
    </>
  );
}