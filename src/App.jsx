import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader/Loader";
import Services from "./components/Services";
import Exploration from "./components/Exploration";


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
          </main>     
        </div>
      )}
    </>
  );
}