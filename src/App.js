
import React from "react";

import {Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import Nationalholiday from "./routes/Nationalholiday";
import Internationalholiday from "./routes/Internationalholiday";
import Weekendgetaway from "./routes/Weekendgetaway";
import Ticketing from "./routes/Ticketing";
import Signup from "./components/Signup";



// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

export default function App(){
    return(
        <div className="App">
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Nationalholiday" element={<Nationalholiday/>}/>
            <Route path="/Internationalholiday" element={<Internationalholiday/>}/>
            <Route path="/Weekendgetaway" element={<Weekendgetaway/>}/>
            <Route path="/Ticketing" element={<Ticketing/>}/>
            <Route path="/signup" element={<Signup/>}/>
         </Routes>
        
         
        </div>
    )

}