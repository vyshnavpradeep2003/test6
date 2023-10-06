import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Home, About } from './components/F2';
import Nav from './components/Nav';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      {/* <F2 /> */}
      { <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter> }

     
      {/*
      To install: npm install react-router-dom

      http://localhost:3000/   -> Home 
      http://localhost:3000/about -> About
      */}
    </div>
  );
}

export default App;